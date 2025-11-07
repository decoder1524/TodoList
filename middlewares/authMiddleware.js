import jwt from 'jsonwebtoken'
export default async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
                if(err){
                    return res.status(401).send({
                        success:false,
                        message:"Unauthorized user",
                    })
                }else{
                    //req.body.id = decode.id
                     req.user = decode;
                    next()
                }
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            message:"Please provide auth token",
            error
        })
        
        
    }
}