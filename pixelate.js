"use strict"

if (document.readyState=="loading") {
    document.addEventListener("DOMContentLoaded", pixelate);
}else {
    pixelate();
}

function pixelate() {
    var imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        if(imgs[i].clientHeight <= 128) {
            imgs[i].style.imageRendering = "pixelated";
        }
    }
}