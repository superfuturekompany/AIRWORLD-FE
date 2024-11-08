/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
    config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
        loader: 'file-loader',
        options: {
            publicPath: '/_next/static/video/',
            outputPath: 'static/video/',
            name: '[name].[hash].[ext]',
            esModule: false,
        },
        },
    });
    return config;
    },
    output: 'export',
    images: { unoptimized: true }
};

export default nextConfig;
