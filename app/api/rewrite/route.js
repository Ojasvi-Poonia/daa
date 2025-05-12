// app/api/rewrite/route.js
export async function GET(request) {
  // This is a fallback route that will only be hit if the request
  // is not for a static file in the public directory

  const url = new URL(request.url);

  // Check if this is a request for a Java file
  if (url.pathname.endsWith(".java")) {
    return new Response("File not found", { status: 404 });
  }

  // For non-Java file requests, redirect to the homepage
  return Response.redirect(new URL("/", request.url));
}
