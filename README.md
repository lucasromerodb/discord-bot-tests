# Discord bot starter template (NodeJS)

## Pre-requisites

- [Node 12 or newer](https://nodejs.org/en/) (LTS recommended)
- [VS Code](https://code.visualstudio.com/download) (or similar)
- [Discord Server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-)

## Quick start

> Go to Discord Apps Dashboard to create your new application or bot: https://discord.com/developers/applications/

1.  Create a `New Application`
2.  Setup an app name and click on `Create`
3.  Go to `Bot` settings and add a new one (here you can find the `bot token`)
4.  Go to `OAuth2` set the stope to `bot`
5.  Set the bot permissions to `Administrator`
6.  Copy the scope invitation link and paste on a new tab. Then invite the bot to your server

## Before starting the project

Run the following command:

```sh
npm init # to setup your package
npm i discord.js # to install a Discord package and interact with their API
cp config.mock.json config.json # to setup the your private bot token
```

Then update the `BOT_TOKEN` with your real one in the `config.js` file.

```json
{
  "BOT_TOKEN": "YOUR_BOT_TOKEN_HERE"
}
```

> You can reveal your private bot token in the `Bot` dashboard settings

## Run your project

```sh
node index.js
```

> Now you can see your bot online on your Discord server

---

#### Discord JS

* GitHub: https://github.com/discordjs/discord.js
* Docs: https://discord.js.org/#/docs/main/stable/general/welcome
