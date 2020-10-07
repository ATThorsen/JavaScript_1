
var os = require('os');

module.exports = {
    platform: os.platform(),
    osType: os.type(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    EOL: os.EOL,
};

