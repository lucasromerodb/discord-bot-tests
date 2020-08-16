const Discord = require("discord.js");
const config = require("./config.json");
const usaPresidentList = require("./usaPresidentListScrapper");
const usaPresident = require("./usaPresidentScrapper");

const client = new Discord.Client();

const prefix = "!";

client.on("message", async (message) => {
  if (message.author.bot) {
    return;
  }

  if (!message.content.startsWith(prefix)) {
    return;
  }

  const commandBody = message.content.slice(prefix.length); // command without prefix
  const args = commandBody.split(" "); // command and args
  const command = args.shift().toLowerCase(); // command itself

  if (command === "ping") {
    message.reply(`⏱ fetching...`);

    let presidents = "\n";
    const timeTaken = Date.now() - message.createdTimestamp;
    const presidentsPath = await usaPresidentList();

    await Promise.all(
      presidentsPath.map(async (path, i) => {
        const { name, birthday } = await usaPresident("https://en.wikipedia.org" + path);
        presidents += `${i + 1}. ${name} (${birthday})\n`;
      })
    );

    message.reply(`${presidents}\n${timeTaken}ms.`);
  }
});

client.login(config.BOT_TOKEN);
