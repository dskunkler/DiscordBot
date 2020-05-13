'use strict';
// require('dotenv').config();
require('dotenv').config({ debug: process.env.DEBUG });


/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

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
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  if (message.content === 'bing') {
    message.channel.send('NO!');
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
console.log(process.env.CLIENT_TOKEN);
client.login(process.env.CLIENT_TOKEN);