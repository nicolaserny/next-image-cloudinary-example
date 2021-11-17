/** @type {import('next').NextConfig} */
const cloudinaryBaseUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`;
module.exports = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_BASE_URL: cloudinaryBaseUrl,
  },
  images: {
    loader: "cloudinary",
    path: cloudinaryBaseUrl,
  },
};
