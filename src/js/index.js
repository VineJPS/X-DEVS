const btnAvanca = document.getElementById("btn-avanca");
const btnVolta = document.getElementById("btn-volta")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvanca.addEventListener('click', function(){

    if(cartaoAtual === cartaoAtual.length -1) return;

    
    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado")


})

btnVolta.addEventListener('click', function(){
    if(cartaoSelecionado === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado")

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado")


})
