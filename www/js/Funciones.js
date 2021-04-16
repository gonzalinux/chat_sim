let Discord=require("discord.js");
let Caman = require("caman").Caman;
const wget = require('wget-improved');
const webp=require('webp-converter');
const fs=require("fs")
const { createCanvas, loadImage } = require('canvas');


function  gerRole(roleManager,nombre){
    let iterable=roleManager.cache.values();

    for(let i=0;i<roleManager.cache.size;i++){
        let actual=iterable.next();

        if(actual.value.name===nombre)
            return actual.value;


    }
    return null;

}
function sendMessage(channel,text="Hola",archivo=[],embedeo={titulo:"AAA",color:0xff0000,descrpcion:"Hello",embed:false,autor:undefined,footer:undefined,thumbnail:undefined}){
    if(embedeo.embed){
        const embed = new Discord.MessageEmbed();
        embed.setTitle(embedeo.titulo);
        embed.setColor(embedeo.color)
        embed.setDescription(text);
        if(embedeo.autor!==undefined)
            embed.setAuthor(embedeo.autor);
        if(embedeo.footer!==undefined)
            embed.setFooter(embedeo.footer)
        if(embedeo.image!==undefined)
            embed.setImage(embedeo.image)
        if(archivo!==[])
            embed.attachFiles(archivo);

    channel.send(embed)


    }else


    channel.send(text, {files:archivo});



}

async function getmember(guild = new Discord.Guild(undefined, undefined), id) {

let userr;
    await guild.members.fetch(id,).then(user => {
            user.user.avatarURL()
            userr= user
        }
    )
    console.log(userr)
return userr;

}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function imgcolor(r,g,b,url=undefined, urldestino="./color.png"){
    return new Promise((async resolve => {
        let cosa;

        if(url===undefined){
            let cnv=createCanvas(500,500);
            const ctx = cnv.getContext('2d');
            ctx.rect(-100, -100, 1000, 1000);
            ctx.fillStyle="white";
            ctx.fill();
            cosa=cnv.toBuffer();
            fs.writeFileSync("imggg.png",cosa);
            cosa="imggg.png"

        }
        else{

            cosa=url;
        }

        Caman(cosa,function (){
            this.channels({
                red:r,
                green:g,
                blue:b
            })
            this.render(()=>{
                this.save(urldestino);
                resolve(urldestino);


            })
        })

    }))

}


module.exports={
    getRole:gerRole,
    sendMessage:sendMessage,
    getMember:getmember,
    timeout:timeout,
    imgcolor:imgcolor
};
