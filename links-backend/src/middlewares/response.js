const TYPE_JASON = 'application/json';
const STATUS_CODE_OK = 200;
const SATUS_CODE_BAD_REQUEST = 400;
const SATUS_CODE_UNAUTHORIZED = 401;
const SATUS_CODE_NOT_FOUND = 404;
const SATUS_CODE_SERVER_ERRO = 500;


const jsonOK = function(data, message, metadada){
const status = STATUS_CODE_OK;
message = (message) ? message: 'Sucessfull request';
metadada = (metadada) ? metadada: {};

    this.status(status);
    this.type(TYPE_JASON);
    return this.json({message, data, metadada, status: status});
}

const jsonBadRequest = function(data, message, metadada){
    const status = SATUS_CODE_BAD_REQUEST;
    message = (message) ? message: 'Bad request';
    metadada = (metadada) ? metadada: {};
    
        this.status(status);
        this.type(TYPE_JASON);
        return this.json({message, data, metadada, status: status});
    }


const jsonUnauthorized = function(data, message, metadada){
    const status = SATUS_CODE_UNAUTHORIZED;
    message = (message) ? message: 'Unauthorized';
    metadada = (metadada) ? metadada: {};
        
        this.status(status);
        this.type(TYPE_JASON);
        return this.json({message, data, metadada, status: status});
        }


const jsonNotFound = function(data, message, metadada){
    const status = SATUS_CODE_NOT_FOUND;
    message = (message) ? message: 'Not found';
    metadada = (metadada) ? metadada: {};
                
        this.status(status);
        this.type(TYPE_JASON);
        return this.json({message, data, metadada, status: status});
        }        

const jsonServerErro = function(data, message, metadada){
    const status = SATUS_CODE_SERVER_ERRO;
    message = (message) ? message: 'Server erro';
    metadada = (metadada) ? metadada: {};
                        
        this.status(status);
        this.type(TYPE_JASON);
        return this.json({message, data, metadada, status: status});
        }               




const response = (req, res, next) =>{
    res.jsonOK = jsonOK;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerErro = jsonServerErro;
    
    
    next();
};

module.exports = response;

