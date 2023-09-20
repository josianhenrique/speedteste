document.addEventListener("DOMContentLoaded", function(){
escreverMensagem()
})


function escreverMensagem(){
    let nome = localStorage. getItem("nome")
    let resp = document.querySelector("p")
    resp.innerHTML = `Seja Bem Vindo ${nome} a Luta do Século`
}