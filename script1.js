function carregar(){
    var msg = window.document.getElementById('msg')
   // var img = window.document.getElementById('imagem')
   var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
       
        document.body.style.background = '#E5ACF5'
        //BOM DIA
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
       img.src = 'tarde.png'
        document.body.style.background ="#859B44"
    } else{
        //BOA NOITE
        img.src = 'noite.png.png'
       
        document.body.style.background = '#271E30'
    }
}
