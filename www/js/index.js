
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

let chatcontent;
let textocargado=false;
let pasadoinicio=false;
function fail(){

    alert("FALLO");

}
document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady() {
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory+"www/js/chat.json",gotFile,fail);
    function gotFile(fileEntry) {

        fileEntry.file(function(file) {
          let reader = new FileReader();

            reader.onloadend = function(e) {
                console.log("Text is: "+this.result);
                chatcontent = this.result;
                chatcontent=JSON.parse(chatcontent);
            }

            reader.readAsText(file);
        });

    }





    // Cordova is now initialized. Have fun!
    let botonempezar = $("#btnempezar");
    let inicioapp=$("#Inicioapp");
    botonempezar.resize(()=>$("#btnempezar p").fitText(0.3));
    $("#btnempezar p").fitText(0.3);


    botonempezar.click(async () => {
        let media = new Media("./mp3/tv.mp3");
        media.play()
        if(pasadoinicio)
            return

        pasadoinicio=true;


        botonempezar.css({
            "color": "white",
            "background": "white",
            "height":botonempezar.height()+"px"
        })
        await timeout(1100);
        botonempezar.css({
            "width": "110%",
        })
        await timeout(1100);
        botonempezar.css({

            "height": "110%"
        })
        await timeout(1010);
        botonempezar.css("opacity","0");
        inicioapp.css({
            "background":"transparent",
            "opacity":"1"
        })



        botonempezar.css("opacity","0");
        $("#contenedorchat").css({
            "display":"flex"
        });
        await timeout(1000);
        botonempezar.css("display","none");
        inicioapp.css("display","none");
        await inicio();
        $("#chat").click(inicio);

        media.stop()
    });
}

let puntero=0;
let enanim=false;
async function inicio(){
    if(enanim)
        return
    if(puntero>=chatcontent.length) {
        alert("Se ha alcanzado el final de la conversacion.")
        return
    }

    enanim=true;
    let imagen=$("#imagenhablante img");
    let hablante=$("#hablante");
    let texto=$("#textochat");
    if(puntero!==0) {
        texto.css("opacity", 1).animate({
            "opacity": 0

        }, 400);
        await timeout(400);
    }
    texto.html(chatcontent[puntero].texto);

    imagen.attr("src","./img/sprites/"+chatcontent[puntero].sprite);
    hablante.html(chatcontent[puntero].hablante);
    puntero++;



    texto.animate({
        "opacity":1

    },400,"swing",()=>enanim=false);



}