import dotenv from "dotenv"
dotenv.config();

import ImageKit from "imagekit";

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.URL_ENDPOINT,
})

export const uploadFunc = async (file,fileName) => {
 try {
       const result = await imageKit.upload({
        file,
        fileName
    })
    return result
 } catch (error) {
    console.log("Image upload failed:", error);
 }
}