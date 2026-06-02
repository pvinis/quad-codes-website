import { NextResponse, type NextRequest } from "next/server";

const HOUR_BELL_SUBDOMAIN = "hour-bell.";
const HOUR_BELL_PATH = "/hour-bell";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") ?? url.host;
  const hostname = host.split(":")[0]?.toLowerCase() ?? url.hostname.toLowerCase();
  const pathname = url.pathname;

  if (pathname === `${HOUR_BELL_PATH}/policy` || pathname === `${HOUR_BELL_PATH}/privacy-policy`) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = `${HOUR_BELL_PATH}/privacy`;
    return NextResponse.redirect(redirectUrl);
  }

  if (!hostname.startsWith(HOUR_BELL_SUBDOMAIN)) {
    return NextResponse.next();
  }

  if (pathname === "/policy" || pathname === "/privacy-policy") {
    const redirectUrl = url.clone();
    redirectUrl.pathname = "/privacy";
    return NextResponse.redirect(redirectUrl);
  }

  if (pathname === HOUR_BELL_PATH || pathname.startsWith(`${HOUR_BELL_PATH}/`)) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = pathname.replace(HOUR_BELL_PATH, "") || "/";
    return NextResponse.redirect(redirectUrl);
  }

  const rewriteUrl = url.clone();
  rewriteUrl.pathname = pathname === "/" ? HOUR_BELL_PATH : `${HOUR_BELL_PATH}${pathname}`;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
