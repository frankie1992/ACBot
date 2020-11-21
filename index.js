require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const scheduler = require('./utils/scheduler.js')

client.on('ready', () => {
	console.log('Ready!');
	const channel = client.channels.cache.find(ch => ch.name === 'super-secret-chat');
	if (!channel) return;
	channel.send("I'm awake on the cloud!");
});
//super-secret-chat
//775456724743487509
//turnip-prices
//'775459297131102228'
try {
	//Morning turnip reminder
	scheduler.createScheduledMessage(client, '00 10 * * 1-6', 'Morning turnip price reminder', '775459297131102228' , 'America/North_Dakota/New_Salem');
	//Afternoon turnip reminder
	scheduler.createScheduledMessage(client, '00 17 * * 1-6', 'Evening turnip price reminder', '775459297131102228' , 'America/North_Dakota/New_Salem');
	//Morning turnip reminder
	scheduler.createScheduledMessage(client, '00 10 * * SUN', 'Dont forget to buy turnips', '775459297131102228' , 'America/North_Dakota/New_Salem');
} catch (err) {
	console.log(err)
}
client.login(process.env.TOKEN);
