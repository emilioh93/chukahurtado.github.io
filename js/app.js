let imagenes = [src = "img/faviconChuka.jpg", src = "img/avatar.png"];
let x = 0;

function slider() {
    if (x > 1) {
        x = 0;
    }
    document.getElementById("imgAvatar").src = imagenes[x];
    x++;
}

let temporizador = setInterval("slider()", 3000);