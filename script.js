//alert("A cor de fundo vai mudar")

document.body.style.backgroundColor = "green";

var inputNome = document.querySelector("#nome");
inputNome.addEventListener('focus', focoInputNome);

function minhaFuncao() {
    var elemento = document.querySelector("#meuDiv");
    elemento.style.backgroundColor = "blue";
    elemento.hidden = false;

    var cabecalho = document.getElementById("cabecalho1");
    cabecalho.innerHTML = "Este é um <em>teste</em> de manipulação do DOM";
}

function afterLoad() {
    var paragrafos = document.getElementsByTagName("p");
    var paragrafosQuery = document.querySelectorAll("p");
    var conteineres = document.getElementsByClassName("conteiner");
    var conteineresQuery = document.querySelectorAll(".conteiner");
    var conteiner = document.querySelector(".conteiner");
}

function focoInputNome(placeholder) {
    alert(placeholder);
}
