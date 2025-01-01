import { getToken } from "next-auth/jwt";
import { JWT } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(request: NextRequest) {
    const isAuth = (await getToken({ req: request })) as JWT | null;
    const pathname = request.nextUrl.pathname;

    const ProtectedRoutes = ["/dashboard"];
    const IsProtectedRoutes = ProtectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    // Dashboard Routes
    const dashboardRoutes = "/dashboard";
    const isDashboardRoute = pathname === dashboardRoutes;

    // Authenticated Routes
    const AuthRoute = `/`;
    const isAuthenticated = pathname === AuthRoute;

    // Authenticated Check
    if (isAuthenticated && isAuth) {
      return NextResponse.redirect(
        new URL(`/dashboard/my-profile`, request.url)
      );
    }

    // Dashboard Check
    if (isDashboardRoute) {
      if (isAuth) {
        return NextResponse.redirect(
          new URL(`/dashboard/my-profile`, request.url)
        );
      } else {
        return NextResponse.redirect(new URL(`/`, request.url));
      }
    }

    // Work Well Protected
    if (IsProtectedRoutes && !isAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  },
  {
    callbacks: {
      authorized(params) {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/", "/dashboard", "/dashboard/:path*"],
};
