import JWT from "jsonwebtoken"
export const authenticate = (req, res, next) => {
    const token=req.headers('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access, token missing"
        });
    }
    try{
        const decodes=JWT.verify(token,process.env.JWT_SECRET_KEY);
        req.user=decodes;
        next();
    }catch(err){
        return res.status(401).json({
            message:"Unauthorized access, invalid token"
        });
    }
}