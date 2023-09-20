function cadastrarpessoa() {

    let nome = document.querySelector("#nome").value
    localStorage.setItem("nome", nome)

    window.location.href = "bemvindo.html"
    
}