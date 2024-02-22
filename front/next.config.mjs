/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dnautzk6f/image/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dnautzk6f/image/**",
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/img/**',
      },
      {
        protocol: "https",
        hostname: "phantom-marca.unidadeditorial.es",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cucinare.tv",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "elpoderdelconsumidor.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s1.eestatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "semillasypi.org.ar",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.scoolinary.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn0.recetasgratis.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.goya.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ew.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
