const dns = require("node:dns");

module.exports = function validateUrl(url) {
    //function to check url authenticity
    url = url.replace("http://", "").replace("https://", ""); //cleanup for dns lookup to work

    return new Promise((resolve, reject) => {
        dns.lookup(url, (err, address, family) => {
            if (err) {
                reject(new Error("URL is not valid or does not exist"));
            }
            if (err) reject(err);
            resolve(address);
        })
    })
}