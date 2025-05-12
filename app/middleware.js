// middleware.js
export default function middleware(req) {
  // This middleware ensures Java files are served with the correct content type
  const url = req.nextUrl.pathname;
  if (url.endsWith(".java")) {
    // The browser will display the Java code as plain text
    const response = new Response(null, {
      status: 308,
      headers: {
        Location: url,
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
    return response;
  }
}

export const config = {
  matcher: "/:path*.java",
};
