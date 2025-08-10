import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  // const localeCookie = request.cookies.get("locale")?.value ?? "en";

  // if (!pathname.startsWith("/en") && !pathname.startsWith("/id")) {
  //   return NextResponse.redirect(
  //     new URL(`/${localeCookie}${pathname}`, request.url)
  //   );
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
