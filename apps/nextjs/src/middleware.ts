// Empty middleware for marketing-only site
// Authentication middleware disabled

export const config = {
  matcher: []
};

export default function middleware() {
  // No-op middleware for marketing site
  return;
}