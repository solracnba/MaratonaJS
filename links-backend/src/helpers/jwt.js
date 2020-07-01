require('dotenv').config();

const jwt = require('jsonwebtoken');

const tokenPrivatekey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refreshtokenPrivatekey = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

const options = {expiresIn: '30 minutes'};
const refreshOptions = {expiresIn: '30 days' };

const generateJwt = (paylod) => {
    return jwt.sign(paylod, tokenPrivatekey, options);
};


const generateRefreshJwt = (paylod) => {
    return jwt.sign(paylod, refreshtokenPrivatekey, refreshOptions);
};


const verifyJwt = (token) => {
    return jwt.verify(token, tokenPrivatekey);
};


const verifyRefreshJwt = (token) => {
    return jwt.verify(token, refreshtokenPrivatekey);
};

module.exports ={generateJwt, generateRefreshJwt, verifyJwt, verifyRefreshJwt};