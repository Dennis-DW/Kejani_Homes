/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
     domains: ['i.pinimg.com', 'bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
     // Add the file-loader rule for .mp4 files
     config.module.rules.push({
       test: /\.mp4$/,
       use: [
         {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'videos/',
             publicPath: 'videos/',
           },
         },
       ],
     });
 
     return config;
  },
 };
 
 export default nextConfig;
 