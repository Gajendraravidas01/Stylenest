import jwt from 'jsonwebtoken';

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;

    if(!authHeader){
        return res.status(403).json({
            message : "You are not authenticated"
        })
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token,process.env.JWT_SEC_KEY, (err,user) => {
        if(err){
            return res.status(403).json({
                message : "token is not valid"
            })
        }
        req.user = user;
        next();
    })
}

const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res,() => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return res.status(403).json({
                message : "You are Not allowed to do this Task"
            })
        }
    })
}

const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res,() => {
        // console.log(req.user);
        if(req.user.isAdmin){
            next();
        }else{
            return res.status(403).json({
                message : "You are Not allowed to do this Task"
            })
        }
    })
}

export {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}; 

