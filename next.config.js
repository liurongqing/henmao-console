/** @type {import('next').NextConfig} */

console.log(
  "process.env.NEXT_PUBLIC_API_ROOT",
  process.env.NEXT_PUBLIC_API_ROOT
);

const nextConfig = {
  api: {
    bodyParser: false,
  },
  experimental: {
    appDir: true,
  },
  // 后端接口代理
  async rewrites() {
    return [
      {
        source: "/user-center/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_ROOT}/user-center/:path*`,
      },
      {
        source: "/auth/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_ROOT}/auth/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
