import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const haveToken = cookies().get("token")?.value;

  const protectedPath = new URL(request.url).pathname.startsWith("/studio");

  if (haveToken !== process.env.NEXT_AUTHORIZATION_TOKEN && protectedPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/education", "/experience", "/projects/:path*", "/studio"],
};
