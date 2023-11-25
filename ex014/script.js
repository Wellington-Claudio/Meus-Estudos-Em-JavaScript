function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    data = new Date()
    var hora = data.getHoures()
    msg.innerHTML = `Agora são ${hora} horas.`

}