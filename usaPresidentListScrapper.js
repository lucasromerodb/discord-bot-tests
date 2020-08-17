const rp = require("request-promise");
const $ = require("cheerio");
const usaPresident = require("./usaPresidentScrapper");

const names = () =>
  rp("https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States")
    .then(async (html) => {
      console.log("fetching data...");
      const link = $("tbody > tr > td > b a", html);
      const list = [];

      for (let i = 0; i < link.length; i++) {
        const path = link[i].attribs.href;
        const { name, birthday } = await usaPresident("https://en.wikipedia.org" + path);
        list.push(`${i + 1}. ${name} (Born in ${birthday})`);
      }

      return list;
    })
    .catch((err) => {
      console.error(err);
    });

module.exports = names;
