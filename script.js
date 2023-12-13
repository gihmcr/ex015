function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os daos e tente novamente!')
    } else {
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'fotocriancamas.png')
            } else if (idade < 50){ 
                img.setAttribute('src', 'fotojovemmas.png')
            } else {
                img.setAttribute('src', 'fotoidosomas.png')
            }

        } else {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'fotocriancafem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'fotojovemfem.png')
            } else {
                img.setAttribute('src', 'fotoidosofem.png')
            }
        }
        res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}