const Discord = require("discord.js");
const config = require("./config.json");
const usaPresidentList = require("./usaPresidentListScrapper");

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

  if (command === "presidents") {
    message.reply(`⏱ fetching...`);

    const presidents = await usaPresidentList();
    let names = "\n";

    for (let i = 0; i < presidents.length; i++) {
      names += `${presidents[i]}\n`;
    }

    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`${names}\n✅ Estimated time: ${timeTaken}ms.`);
    console.log("DONE");
  }
});

client.login(config.BOT_TOKEN);
console.log("I'm ready!");
