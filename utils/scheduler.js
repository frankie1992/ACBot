const cron = require('cron');

const scheduleFunction = (timeToRun, runFunction , timeZone) => {
  const scheduledMessage = new cron.CronJob(timeToRun, runFunction, null, true, timeZone);
  scheduledMessage.start();
}

const createScheduledMessage = (client, time, msg, channelID, timezone) => {
  scheduleFunction(time, () => { client.channels.cache.get(channelID).send(msg);} , timezone);
}

exports.createScheduledMessage = createScheduledMessage;