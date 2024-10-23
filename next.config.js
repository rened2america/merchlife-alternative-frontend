await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "politicozen-prod.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.merchlife.co",
        // pathname: '/s/files/**'
      },
      {
        protocol: "https",
        hostname: "merchlife.co",
        // pathname: '/s/files/**'
      },
      {
        protocol: "https",
        hostname: "politicozen-test.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "merchlife-content.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default config;
