const rp = require("request-promise");
const $ = require("cheerio");

const names = (url) =>
  rp("https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States")
    .then((html) => {
      const link = $("tbody > tr > td > b a", html);
      const names = [];

      for (let i = 0; i < link.length; i++) {
        const path = link[i].attribs.href;
        names.push(path);
      }

      return names;
    })
    .catch((err) => {
      console.error(err);
    });

module.exports = names;
