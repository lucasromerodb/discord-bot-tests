const rp = require("request-promise");
const $ = require("cheerio");

const president = (url) =>
  rp(url)
    .then((html) => {
      return {
        name: $("#firstHeading", html).text(),
        birthday: $(".bday", html).text(),
      };
    })
    .catch((err) => console.log(err));

module.exports = president;
