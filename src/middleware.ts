// import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";



const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/forum(.*)',
    '/chat(.*)',
    '/[...url]'
])


export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
})
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};



// export function middleware(req: NextRequest) {
//     const res = NextResponse.next();

//     const cookie = req.cookies.get("sessionId");

//     if (!cookie) {
//         res.cookies.set("sessionId", crypto.randomUUID())
//     }

//     return res;
// }