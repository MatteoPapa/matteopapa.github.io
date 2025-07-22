import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "development";

const nextConfig: NextConfig = {
    basePath: isProd ? "/portfolio" : "",
    assetPrefix: isProd ? "/portfolio/" : "",
    output: "export",
    distDir: "out",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
