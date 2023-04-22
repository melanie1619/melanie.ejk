
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop:true,
    delay:75,
});

typewriter
.pausefor(2500)
.typeString('Desarrolo sitios web y escribo articulos sobre programacion')
.pausefor(200)
.deleteChars(10)
.start();
