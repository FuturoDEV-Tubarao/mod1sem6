//alert("A cor de fundo vai mudar")


function atualizaRelogio() {
    var dataHora = new Date();
    var hora = dataHora.toLocaleTimeString();
    document.querySelector("p#relogio").textContent = hora;
}

setInterval(atualizaRelogio, 1000);

setTimeout(function() {
    alert("Olá, Mundo!")
}, 2000);

function ola(cumprimento, quem) {
    alert(cumprimento + ", " + quem + "!");
}

var timeoutId = setTimeout(ola, 6000, "Boa tarde", "Fulano");

var confirmUsuario;

/* var intervalId = setInterval(function() {
    confirmUsuario = confirm("Vc confirma?")
    console.log(confirmUsuario);
}, 3000) */

document.querySelector("#btnCancelTimeout").addEventListener("click", function() {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
})

document.body.style.backgroundColor = "green";

var btnDesabilitaAlertas = document.querySelector("#btnDesabilitaAlertas");
btnDesabilitaAlertas.addEventListener("click", desabilitaAlertas);

var inputNome = document.querySelector("#nome");
// inputNome.addEventListener('focus', focoInputNome);

var divForm = document.querySelector("#divForm");

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

function focoInputNome() {
    alert("Digite seu nome:");
}

function desabilitaAlertas() {
    inputNome.removeEventListener("focus", focoInputNome);
}

var btnAddParagrafo = document.querySelector("#btnAddParagrafo");
btnAddParagrafo.addEventListener("click", addNovoP);


function addNovoP() {
    var novoP = document.createElement('p');
    novoP.innerHTML = "Fui criado dinamicamente";
    
    document.body.appendChild(novoP);
}

document.querySelector("#btnAddCampo").addEventListener("dblclick", function() {
    addNovoInput("Novo Campo:");
});

function addNovoInput(nome) {
    var novoLabel = document.createElement('label');
    novoLabel.innerText = nome;

    var novoInput = document.createElement('input');

    var lblNome = document.querySelector("#lblNome");

    divForm.insertBefore(novoInput, lblNome);
    divForm.insertBefore(novoLabel, novoInput);
}

document.querySelector("#btnApagaP").addEventListener("click", function() {
    document.body.removeChild(document.querySelector("#pUm"));
})



document.querySelector("#btnSalvar").addEventListener("click", salvar);
document.querySelector("#btnLimparStorage").addEventListener("click", limparStorage);

function salvar() {
    localStorage.setItem("nome", inputNome.value);
    localStorage.setItem("sobrenome", document.querySelector("#sobrenome").value);
}

function limparStorage() {
    localStorage.clear();
}


document.querySelector("#btnSalvaPets").addEventListener("click", salvarPets);

function salvarPets() {
    var listaPets = [];
    listaPets[0] = document.querySelector("#pet1").value;
    listaPets[1] = document.querySelector("#pet2").value;

    var strListaPets = JSON.stringify(listaPets);

    console.log(strListaPets);

    localStorage.setItem("listaPets", strListaPets);

    if (localStorage.getItem("listaPets")) {
        var listaPetsStorage = JSON.parse(localStorage.getItem("listaPets"));
        listaPetsStorage.forEach(pet => {
            var listItemPet = document.createElement("li");
            listItemPet.innerText = pet;
            listItemPet.setAttribute("id", "listItemPet");
            document.querySelector("#listPets").appendChild(listItemPet);
        });
    }
}

localStorage.removeItem("listaPets");
