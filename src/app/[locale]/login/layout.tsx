import { redirect } from "next/navigation";

import { ProvideMessages } from "@/components";
import { createServerClient } from "@/lib/supabase/createServerClient";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  const { data, error } = await supabase.auth.getUser();
  if (!error || data?.user) {
    redirect("/");
  }

  return (
    <ProvideMessages namespaces={["common", "Login"]}>
      {children}
    </ProvideMessages>
  );
}
