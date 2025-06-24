import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // disable Image Optimization (required for export)
  },
  distDir: "docs",
  basePath: '/mahavirdiagnosticcenter', // REQUIRED if hosting from a repo sub-path
};

module.exports = nextConfig;
