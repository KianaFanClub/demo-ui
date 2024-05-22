/** @type {import('next').NextConfig} */
const nextConfig = {
    // 静态文件
    assetPrefix: '.',
    // 引入antd
    transpilePackages: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table"],
    // 打包
    output: "export",
    // 打包-路由
    trailingSlash: true,
    // 图片
    images: {
        loader: 'custom',
        loaderFile: './my/image/loader.js',
    },
};

export default nextConfig;
