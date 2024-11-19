import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    eslint: {
        dirs: [
            'src/app',
            'src/commons',
            'src/components',
            'src/graphql',
            'src/styles',
        ],
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
            },
        ],
    },
    experimental: {
        optimizeCss: true,
    },
    poweredByHeader: false,
    reactStrictMode: false,
};

export default nextConfig;
