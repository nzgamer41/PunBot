var Discord = require("discord.js");
var fs = require ("fs");

var bot = new Discord.Client();
var prefix = '!'
var puns = ["If you've been thinking about singing karaoke with a friend, just duet!","I love when candy canes are in mint condition.","A life in politics is full of parties."];

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

bot.on("message", message => {
		if (message.content.startsWith(prefix + "pun")) {
			fs.readFile('puns.txt', "utf8", function(err, fileContents){
		var lines = fileContents.split("\n"[0]);
            message.channel.sendMessage(lines[Math.floor(Math.random()*lines.length) -1]);
		})
}
		if (message.content.startsWith(prefix + "ban")) {
			var user_permissions = message.channel.permissionsFor(message.author.id);
			var botperms = message.channel.permissionsFor(bot.user.id);
			var bantuser = message.channel.permissionsFor(message.mentions.users.first());
			if (user_permissions.hasPermission("BAN_MEMBERS")){
			if (botperms.hasPermission("BAN_MEMBERS")){
			let args3 = message.content.split(" ").slice(1);
			if (args3 == "") {1
			message.channel.sendMessage("Error: Please type a users name after the command.");
			}
			else{
			try {
			message.guild.member(message.mentions.users.first()).ban(7);
			} catch(error) {
  			console.log("Error banning user " + error);
			message.channel.sendMessage("No stupid, you can't ban that!");
			return;
			}
			if (args3 == "<@!" + message.channel.guild.owner.id + ">"){
			console.log("Error banning the owner");	
			message.channel.sendMessage("I don't think so pal, you can't ban the owner.");
			return;			
			}
			else if (bantuser.hasPermission("ADMINISTRATOR")){
			message.channel.sendMessage("Unable to ban this member since they have admin permissions.");	
			return;	
			}
			else{
			message.channel.sendMessage("http://i.imgur.com/O3DHIA5.gif?noredirect");
			message.channel.sendMessage("User " + args3 +". has been banned by " + message.author);
			console.log("Banned " + args3 + ".");
			}
			}
			
			}
			else {
			message.channel.sendMessage("The bot does not have banning permissions.");
			return;			
			}
			}
			else{
			message.channel.sendMessage("You do not have permissions to do that, or the bot is unable to ");
			}
                }
		if (message.content.startsWith(prefix + "help")) {
			message.channel.sendMessage("All commands begin with !.\n\n!pun Tells a random pun.\n!gaben Calls our lord and saviour.\n!version States version number of bot.\n!meme Displays a random meme from a list.\n!serverinfo Displays information about this server.\n!game Alerts everyone that you would like to find people to play a game with.\n!submitmeme Enables you to add a meme to the bot.\n!kys Tells a user to kill themselves.\n!fys Tells a user to kill themselves.\n!ship Ships 2 different members.\n!help Displays this message.");
		}
		if (message.content.startsWith(prefix + "consider")) {
			message.channel.sendMessage("http://i.imgur.com/4FsaUIK.png");
		}
		if (message.content.startsWith(prefix + "gaben")) {
			message.channel.sendMessage("Our Gaben,\nWho art in Valve,\nHallowed by thy name.\nThy Half-Life 3 come,\nthy purchase will be done,\nOnline as it is in offline.\nGive us this day our daily deals,\nand forgive us our guest passes,\nas we forgive those who guest pass against us.\nAnd lead us not into temptation,\nBut deliver us from Origin.\nFor thine is the kingdom,\nthe power and the glory,\nforever and ever.\n\nGaben.");
		}
		if (message.content.startsWith(prefix + "version")) {
			message.channel.sendMessage("PunBot v2.2.2 created by <@184943705797558272>.");
		}
		if (message.content.startsWith(prefix + "fys")) {
			let args1 = message.content.split(" ").slice(1);
			if (args1 == "") {1
			message.channel.sendMessage("Error: Please type a users name after the command.");
			}
			else{
			message.channel.sendMessage("Go Fuck Yourself " + args1 +". From " + message.author);	
			}	
		}
		if (message.content.startsWith(prefix + "meme")) {
    fs.readFile('memes.txt', "utf8", function(err, fileContents){
		var lines = fileContents.split("\n"[0]);
            message.channel.sendMessage(lines[Math.floor(Math.random()*lines.length) -1]);
    })
};
		if (message.content.startsWith(prefix + "submitmeme")) {
		let args2 = message.content.split(" ").slice(1) + "\n";
		if (args2 == "") {1
		message.channel.sendMessage("Error: Please enter a link to a meme.");
		}
		else{
		fs.appendFile('memes.txt', args2, function (err) {
		if (err) throw err;
		console.log('Saved!');
		message.channel.sendMessage("Saved meme. If it was incorrect please DM <@184943705797558272>.");
});
		}}
		if (message.content.startsWith(prefix + "serverinfo")) {
        message.channel.sendMessage("You are currently in " + message.channel + " (id: " + message.channel.id + ")");
        message.channel.sendMessage("on server **" + message.channel.guild.name + "** (id: " + message.channel.guild.id + ") (region: " + message.channel.guild.region + ")");
        message.channel.sendMessage("owned by " + message.channel.guild.owner + " (id: " + message.channel.guild.owner.id + ")");
     }
	  if (message.content.startsWith(prefix + "game")) {
	   {
	let args2 = message.content.split(" ").slice(1);
			if (args2 == "") {1
			message.channel.sendMessage("Error: Please type a game after the command.");
			}
			else{
      message.channel.sendMessage("@everyone, " + message.author + " would like to know if anyone is up for " + args2);
      console.log("Sent game invites with @everyone for " + args2);
    }
	
  }}
  	  if (message.content.startsWith(prefix + "ship")) {
	   {
	let args2 = message.content.split(" ");
			if (args2[1] == "") {1
			message.channel.sendMessage("Error: Please type 2 users names.");
			}
			else if (args2[2] == "") {1
			message.channel.sendMessage("Error: Please type 2 users names.");
			}
			else{
      message.channel.sendMessage(message.author + " has shipped " + args2[1] + " and " + args2[2] + ".");
    }
          }
      }
          if (message.content.startsWith(prefix + "status")) {
              let args4 = message.content.split(" ").slice(1);
              if (args4 == "") {1
                  message.channel.sendMessage("Error: Please type a status.");
              }
              else {
                  message.channel.sendMessage("Changed bot's status to " + args4 + ".");
                  bot.user.setGame(args4);
              }
          }
  });



bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("");
// invite link for test bot: https://discordapp.com/oauth2/authorize?client_id=294392431506358272&scope=bot&permissions=67316744
