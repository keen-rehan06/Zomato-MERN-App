    import dotenv from "dotenv"
    dotenv.config("./.env");
    import ImageKit from "imagekit";

    const imageKit = new ImageKit({
        publicKey: process.env.PUBLIC_KEY,
        privateKey: process.env.PRIVATE_KEY,
        urlEndpoint: process.env.URL_ENDPOINT,
    })

 export const uploadFunc = async (file,fileName) => {
    try {
        const result = await imageKit.upload({
             file,
             fileName
        });
        return result;
    } catch (error) {
        console.error("Image upload failed:", error.response?.data || error.message || error);
    }
}
