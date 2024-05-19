import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { localePrefix, locales } from "@/lib/translation";
import { supabaseMiddleware } from "@/lib/supabase";

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale: "de",
  localePrefix,
});

export async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  return await supabaseMiddleware(request, response);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
