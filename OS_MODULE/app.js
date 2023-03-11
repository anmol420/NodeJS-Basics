const os = require('os');

// build-in modules
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo()); 

// usage
const osInfo = {
    name: os.type(),
    release: os.release(),
    architecture: os.arch(),
    cpus: os.cpus(),
};

console.log(osInfo);