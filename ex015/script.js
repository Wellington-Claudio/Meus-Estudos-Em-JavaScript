function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe menino-redimencionado.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('srd', 'criança menino-redimencionado.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-redimencionado.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-redimencionado.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe menina-redimencionado.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'criana menina-redimencionado.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta-redimencionado.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa-redimencionado.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}