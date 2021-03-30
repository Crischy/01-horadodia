function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //hora = 00;

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'img/BD.png';
        window.document.body.style.background = "#190909";
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'img/BT.png';
        window.document.body.style.background = "#999999";
    } else {
        // BOA NOITE
        img.src = 'img/BN.png';
        window.document.body.style.background = "#000000";
    }
}
