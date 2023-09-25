module.exports = (req,res,next)=> {
    // verify JWT token
    /* 
        - get token
    */
    const token = req.headers['authorization'].split(' ')[1] || '';

    if(token && token !=''){
        // handle verify token

        return true;
    }

    return false;
}