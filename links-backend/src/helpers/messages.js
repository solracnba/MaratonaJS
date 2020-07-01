const messages = require('../config/menssages.json');

const getMessage = (path) =>{

return messages[path] || null;


};

module.exports = {getMessage}