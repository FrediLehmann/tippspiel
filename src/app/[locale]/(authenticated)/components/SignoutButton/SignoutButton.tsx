"use client";

import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui";
import { createBrowserClient } from "@/lib/supabase/createBrowserClient";

export default function SignoutButton() {
  const supabase = createBrowserClient();
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <Button onClick={signOut}>
      <LogOutIcon className="h-5 w-5 mr-2" /> Sign out
    </Button>
  );
}