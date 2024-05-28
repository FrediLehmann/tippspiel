import "./globals.css";

import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ProvideMessages } from "@/components";
import { StoreProvider } from "@/lib/store";
import { createServerClient } from "@/lib/supabase/createServerClient";

import { Header, UserStateProvider } from "./components";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  let user = {
    id: "",
    email: "",
    signedIn: false,
    communicationLanguage: "en",
  };
  if (data && data.user) {
    user = {
      id: data.user?.id || "",
      email: data.user?.email || "",
      signedIn: true,
      communicationLanguage: data.user?.user_metadata.communicationLanguage,
    };
  }

  return (
    <html lang={locale}>
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ProvideMessages namespaces={["common"]}>
          <StoreProvider>
            <UserStateProvider user={user}>
              <Header />
              {children}
              <Toaster />
            </UserStateProvider>
          </StoreProvider>
        </ProvideMessages>
      </body>
    </html>
  );
}
