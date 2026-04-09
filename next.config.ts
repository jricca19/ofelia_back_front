import type { NextConfig } from "next";

const isPreviewEnv = process.env.VERCEL_ENV === "preview";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isPreviewEnv ? " https://vercel.live" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' https: data:",
  "font-src 'self' https: data:",
  "connect-src 'self' https:",
  "frame-src 'self' https://maps.google.com https://www.google.com https://vercel.live",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
  "block-all-mixed-content",
].join("; ");

const baseSecurityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    const headers =
      process.env.NODE_ENV === "production"
        ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }, ...baseSecurityHeaders]
        : baseSecurityHeaders;

    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },
};

export default nextConfig;
