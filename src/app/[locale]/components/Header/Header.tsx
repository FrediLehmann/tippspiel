"use client";

import { LanguageSwitch } from "@/components";

export default function Header() {
  return (
    <header className="w-full border-b py-2">
      <div className="flex items-center justify-between container max-w-7xl mx-auto">
        <div>
          <span className="font-bold text-lg">Tippspiel</span>
        </div>
        <LanguageSwitch />
      </div>
    </header>
  );
}
