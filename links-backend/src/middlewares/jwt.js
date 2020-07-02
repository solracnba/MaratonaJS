const {verifyJwt} = require('../helpers/jwt');

const checkJwt = (req, res, next) => {

    const {url: path} = req;

    const excludedPaths = ['/auth/sign-up', '/auth/sign-in'];
    const isExcluded = !!excludedPaths.find((p)=>p.startsWith(path));

    if (isExcluded) return next();

let token = req.headers['authorization'];

console.log(req.headers);

token = token ? token.slice(7, token.length) : null;

if(!token){

    return res.jsonUnauthorized(null, 'Invalid token....');
}


try{
    
    const decoder = verifyJwt(token);
    req.accountId = decoder.id;

    next();

} catch (error){

        return res.jsonUnauthorized(null, 'Invalid token!!!');
    };
    
};

module.exports = checkJwt;