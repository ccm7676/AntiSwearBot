const Discord = require('discord.js');
const bot = new Discord.Client();

const warn1 = "716217501511450624";
const warn2 = "716217651759939644";
const warn3 = "716217925232623706";





bot.on('ready', () =>{
    console.log("bot is online!");

})

bot.on('message', (message)=>{


    const msg = message.content.toLowerCase().replace(" ","");


    if(msg.includes("fuck") || msg.includes("cunt") || msg.includes("bitch") || msg.includes("ass") || msg.includes("fag") || msg.includes("shit") || msg.includes("nigger")|| msg.includes("nigga") || msg.includes("cum") || msg.includes("slut") || msg.includes("dick") || msg.includes("basterd") || msg.includes("cock")){
        if(message.member.roles.has(warn3)){
            message.member.ban("swearing");
            message.channel.send(message.member + "was hit with the banhammer ban")
        }
        else if(message.member.roles.has(warn2)){
            message.member.addRole(warn3);
            message.channel.send(message.member + "got the third and last warning")
        }
        else if(message.member.roles.has(warn1)){
            message.member.addRole(warn2);
            message.channel.send(message.member + "was warned")
        }
        else{
            message.member.addRole(warn1);
            message.channel.send(message.member + "was warned")
        }

       
        
        
    }
   
    
    
  
    
})
bot.login(process.env.token);


