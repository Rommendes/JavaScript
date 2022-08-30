function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value)> ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if( idade >= 0 && idade < 12){
                 //CRIANÇA
                 img.setAttribute('src', 'menino.png')
            }else if (idade >= 12 && idade <= 17){
                //ADOLESCENTE
                img.setAttribute('src', 'adolescente.png')
            }else if (idade >=18 && idade < 30){
                //JOVEM ADULTO
                img.setAttribute('src', 'jovem.masc.png')
            }else if (idade >= 30 && idade < 60){
                //ADULTO
                img.setAttribute('src', 'adulto.masc.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
           
        }else if (fsex[1].checked){
            genero = 'mulher'
            if( idade >= 0 && idade < 12){
                //CRIANÇA
                img.setAttribute('src', 'menina.png')
           }else if (idade >= 12 && idade <= 17){
               //ADOLESCENTE
               img.setAttribute('src', 'adolescente_fem.png')
           }else if (idade >=18 && idade < 30){
               //JOVEM ADULTO
               img.setAttribute('src', 'jovem.fem.png')
           }else if (idade >= 30 && idade < 60){
               //ADULTO
               img.setAttribute('src', 'adulto.fem.png')
           }else{
               //IDOSO
               img.setAttribute('src', 'idosa.png')
               
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//COM ESSE COMANDO AS IMAGENS CARREGAM
    }
}