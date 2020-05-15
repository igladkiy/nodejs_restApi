const responseMiddleware = (req, res, next) => {
    if (res.data){
        res.send(res.data);
    }else if(res.err){
       res.send({error: true, message: res.err.message});
    }else {
        next();
    }
}

exports.responseMiddleware = responseMiddleware;