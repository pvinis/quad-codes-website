import { NextResponse, type NextRequest } from "next/server";

const HOUR_BELL_SUBDOMAIN = "hour-bell.";
const HOUR_BELL_PATH = "/hour-bell";
const APP_PATHS = [HOUR_BELL_PATH, "/kept"];

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") ?? url.host;
  const hostname = host.split(":")[0]?.toLowerCase() ?? url.hostname.toLowerCase();
  const pathname = url.pathname;

  for (const appPath of APP_PATHS) {
    if (pathname === `${appPath}/policy` || pathname === `${appPath}/privacy-policy`) {
      const redirectUrl = url.clone();
      redirectUrl.pathname = `${appPath}/privacy`;
      return NextResponse.redirect(redirectUrl);
    }
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
