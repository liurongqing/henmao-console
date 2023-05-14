/** @type {import('next').NextConfig} */

console.log(
  "process.env.NEXT_PUBLIC_API_ROOT",
  process.env.NEXT_PUBLIC_API_ROOT
);

const nextConfig = {
  api: {
    bodyParser: false
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/henmao-api",
        destination: `${process.env.NEXT_PUBLIC_API_ROOT}`,
      },
      {
        source: "/henmao-api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_ROOT}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
