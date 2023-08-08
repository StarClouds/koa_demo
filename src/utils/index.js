class Utils {
    async delay(time) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, time);
        });
    };
}

module.exports = new Utils()