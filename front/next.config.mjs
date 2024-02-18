/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "phantom-marca.unidadeditorial.es",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
