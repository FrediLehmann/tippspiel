import { createServerClient } from "@/lib/supabase/createServerClient";
import { redirect } from "@/lib/translation";
import { SignoutButton } from "@/components";

export const dynamic = "force-dynamic";

export default async function SignedInlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <SignoutButton />
      {children}
    </>
  );
}
