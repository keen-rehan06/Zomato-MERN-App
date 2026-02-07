import ImageKit from "imagekit";

const imageKit = new imageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndPoint:IMAGE_URL_ENDPOINT
})