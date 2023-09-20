

function soma() {

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let soma = numero1 + numero2
    

    document.querySelector("#resultado").innerHTML = (`soma = ${soma}.`)

}


function diminuir() {

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let subtração = (numero1 - numero2)

    document.querySelector("#resultado").innerHTML = (`subtração = ${subtração}.`)

}

function mult() {

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let mult = (numero1 * numero2)

    document.querySelector("#resultado").innerHTML = (`multiplicação = ${mult}.`)

}


function dividir() {

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let dividir = (numero1 / numero2)

    document.querySelector("#resultado").innerHTML = (`divisão = ${dividir}.`)

}

function resto() {

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let resto = (numero1 % numero2)

    document.querySelector("#resultado").innerHTML = (`resto da divisão = ${resto}.`)

}

