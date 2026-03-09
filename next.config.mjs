/** @type {import('next').NextConfig} */

// One-line summary: Adds security headers and URL redirects for the new SEO-friendly route structure.
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://vitals.vercel-insights.com https://*.blob.vercel-storage.com",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: '/introduceCo', destination: '/company', permanent: true },
      { source: '/microPiles', destination: '/micropile', permanent: true },
      { source: '/helixPiles', destination: '/helix-pile', permanent: true },
      { source: '/constructionPerformance', destination: '/projects', permanent: true },
      { source: '/gittanGallery', destination: '/gallery', permanent: true },
    ];
  },
};

export default nextConfig;
