
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.onload = x=> resolve(fr.result);
        fr.readAsText(file);
    })}


function playAudio(url, tiempo) {
    // Play the audio file at url
    let my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
    if(tiempo)
        setTimeout(()=>my_media.stop(),tiempo);
    return my_media;
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

let texto;

document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady() {
    let media = new Media("../mp3/tv.mp3");


    // Cordova is now initialized. Have fun!
    let botonempezar = $("#btnempezar");
    let inicioapp=$("#Inicioapp");
    $("#btnempezar p").fitText(0.3);


    botonempezar.click(async () => {

        texto=readFile()
        media.play();

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
        inicioapp.css({
            "background":"white",
            "opacity":"0"
        })
        media.stop();


        botonempezar.css("opacity","0");
        $("#contenedorchat").css("display","flex");
        await timeout(1000);
        botonempezar.css("display","none");
        inicioapp.css("display","none");







        inicio();
    });
}
function inicio(){







}