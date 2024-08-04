require("dotenv").config();

const { Telegraf } = require("telegraf");

const key = process.env.TOKEN;

const bot = new Telegraf(key);

bot.start((ctx) => {
  console.log(ctx.from);
  console.log(ctx.chat);
  console.log(ctx.message);
  console.log(ctx.updateSubTypes);
  ctx.reply(
    `bienvenido ${ctx.from.first_name}. Has enviado un ${ctx.updateSubTypes}`
  );
});

bot.help((ctx) => {
  ctx.reply("Help!!");
});

bot.settings((ctx) => {
  ctx.reply("Settings");
});

bot.command("mycommand", (ctx) => {
  ctx.reply("my custom command!!!");
});

bot.hears("computer", (ctx) => {
  ctx.reply("Hey, I am selling computers!");
});

// bot.on("text", (ctx) => {
//   ctx.reply("estas texteando");
// });

bot.on("sticker", (ctx) => {
  ctx.reply("oh, you like stickers!");
});

bot.mention("BotFather", (ctx) => {
  ctx.reply("You mentioned someone");
});

bot.launch();
