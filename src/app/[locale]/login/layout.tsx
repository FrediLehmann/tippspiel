import { ProvideMessages } from "@/components";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvideMessages namespaces={["common", "Login"]}>
      {children}
    </ProvideMessages>
  );
}
