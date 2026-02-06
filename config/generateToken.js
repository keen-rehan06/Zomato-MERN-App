import jwt from  "jsonwebtoken"

const generateTokens = (user) => {
    jwt.sign({email:user.email,id:user._id},process.env.SECRET_TOKEN);
}

export default generateTokens;