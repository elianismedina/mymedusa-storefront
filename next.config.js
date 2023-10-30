const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol: "http",
        hostname: "172.19.120.248",
        port: "9001"
      },

    ],
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
      "172.19.120.248:9001",
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
