const dns = require("node:dns");

module.exports = function validateUrl(url) {
    //function to check url authenticity

    //reject non http urls to use res.redirect
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
        let err = new Error("URL needs to include protocol (HTTP/HTTPS)");
        err.status = 400;
        throw err;
    }

   //cleanup for dns lookup to work
    if (url.startsWith("https://")) url = url.slice(8);
    if (url.startsWith("http://")) url = url.slice(7);

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