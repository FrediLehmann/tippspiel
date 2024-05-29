"use client";

import { useRef } from "react";

import { type User, useAppStore } from "@/lib/store";
import { setUser } from "@/lib/store";

export default function UserStateProvider({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  const store = useAppStore();
  if (!initialized.current) {
    store.dispatch(
      setUser({
        id: user.id,
        email: user.email,
        signedIn: user.signedIn,
        communicationLanguage: user.communicationLanguage,
      }),
    );
    initialized.current = true;
  }

  return <>{children}</>;
}