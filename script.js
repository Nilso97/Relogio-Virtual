// Funções
function carregar() {
    var msg = window.document.getElementById('msg')
    var saudacoes = window.document.getElementById('saudacoes')
    var img = window.document.getElementById('imagem')
 
// Hora:Minutos:Segundos    
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    // Condição 1 (hh:mm:ss)
    if (segundos < 10) {
        msg.innerHTML = `<strong>${hora}h${minutos}m${segundos}s</strong>\n`
    } else {
        msg.innerHTML = `<strong>${hora}h${minutos}m${segundos}s</strong>\n`
    }

    setTimeout(carregar, 1000)

    // Condição 2    
    if (hora >= 0 && hora < 12) {
        // Bom Dia!!!
        saudacoes.innerHTML = `<strong>Bom Dia!</strong>`
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'lightblue'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!!!
        saudacoes.innerHTML = `<strong>Boa Tarde!</strong>`
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#FFB90F'
    } else {
        // Boa Noite!!!
        saudacoes.innerHTML = `<strong>Boa Noite!</strong>`
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1C1C1C'
    }
}
