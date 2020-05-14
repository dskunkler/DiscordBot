'use strict';
// require('dotenv').config();
require('dotenv').config({ debug: process.env.DEBUG });


/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Open the config file to get the prefix
const config = require('./config.json');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  // If the message is "ping"
  if (command === 'ping') {
    // Send "pong" to the same channel
      message.channel.send('pong');
  } else if (command === 'bing') {
      message.channel.send('NO!');
  } else if (command === 'server') {
      message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (command === 'user-info') {
      message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
  
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
// console.log(process.env.CLIENT_TOKEN);
client.login(process.env.CLIENT_TOKEN);