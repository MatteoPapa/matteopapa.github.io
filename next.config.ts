import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production";

const nextConfig: NextConfig = {
    basePath: isProd ? "" : "",
    assetPrefix: isProd ? "" : "",
    output: "export",
    distDir: "out",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
