import { ProvideMessages } from "@/components";

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvideMessages namespaces={["common", "ForgotPassword"]}>
      {children}
    </ProvideMessages>
  );
}
