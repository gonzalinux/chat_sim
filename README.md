# chat_sim
Primera app de android usando cordova. Se trata de un simulador de chat facilmente editable mediante el archivo /www/js/chat.json y las fotos de la carpeta www/img/sprites/.

He usado webstorm con el pryecto predefinido de cordova. Nuevo pryecto -> cordova. Los plugins usados son File y Media. Media ahora mismo no se usa pero pensaba poner archivos de audio para su reproduccion junto a los mensajes del chat.


## Instrucciones de uso.

Se necesita git en el pc de destino. 

```git clone https://github.com/gonzalinux/chat_sim```  

Aqui podemos abrir el proyecto en webstorm para más comodidad. Si no se hace se podría hacer un ```cd chat_sim``` y a partir de ahi los siguientes comandos.

Se necesita node.js para utilizar cordova.

```npm install```

```cordova platform add android```

```cordova build android```

```cordova emulate android```

Con esto ya estaría funcionando en el emulador que tengas configurado. Para configuración especifica consultar la documentacion de cordova o el sdk.

## Datos de interés.

El emulador puede instalarse a traves de android studio y tambien cambiar la version de android o el dispositivo a emular.

Se necesitan algunas variables de entorno bien colocadas. Se puede seguir la guia: https://cordova.apache.org/docs/en/10.x/guide/platforms/android/index.html.

Aparte de los de la documentacion yo necesité añadir esta ```C:\Users\gonza\AppData\Local\Android\Sdk\emulator\``` al path Ya que el emulador no me funcionaba. Importante si usas esta no usar la de ```sdk\tools\```
