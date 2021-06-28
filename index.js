const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

function getEmbedOf(object){
  console.log("\n");
  const embed = new Discord.MessageEmbed()
	.setColor(`#000000`)
	.setAuthor('Mb1122', 'https://mge-reviews.tk/logo_small_inverted.png', 'https://mge-reviews.tk/')
  .setTimestamp()
	.setFooter('Last updated:');
  if (object.name) {
    embed.setTitle(object.name);
  }
  if (object.purpose) {
    embed.setDescription("Why does it exist:\n\t" + object.purpose);
  }
  if (object.thumb) {
    embed.setThumbnail(object.thumb);
  } else {
    console.log(`${object.name} needs a thumbnail!`);
  }
  let embedList = "";
  for (property in object) {
    if (property !== "name" && property !== "purpose" && property !== "thumb") {
      embedList += `{ name: '${property}', value: '${object[property]}', inline: true },\n` 
    }
  }
  // console.log("\n\n" + embedList);
  eval(`embed.addFields(${embedList})`);
  return embed;
}

client.once('ready', () => {
  console.log('Active.');
  client.user.setActivity('update', {type: 'PLAYING'});
})

client.on('message', message => {
	if (message.content === "update") {
    // message.delete();
    // throw error because it's meant to delete two messages.
    message.channel.bulkDelete(99);
    fs.readdirSync('./programs/').forEach(file => {
      const fileContents =require(`./programs/${file}`);
      message.channel.send(getEmbedOf(fileContents));
    });
    // message.channel.send(output);
  }
});

client.login('ODQzMDA2NDQzNDY3NTcxMjEw.YJ9k7g.d4k3cg_V28t0c9rbZCD_MKGVDJc');