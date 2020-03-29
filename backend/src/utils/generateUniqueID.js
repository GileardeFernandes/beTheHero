const cryptor = require('crypto');

module.exports = function genereateUniqueID(){  
   return cryptor.randomBytes(4).toString('HEX');
}
