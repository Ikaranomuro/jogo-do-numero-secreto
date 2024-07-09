let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function trocarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female') 
}

function exibirMensagemInicial(){
    trocarTexto("h1", "Jogo do número secreto");
    trocarTexto("p", "Escolha um número de 1 a 10"); 
}
exibirMensagemInicial()

function verificarChute() {
    let valorChutado = document.querySelector('input').value;
    if(valorChutado == numeroSecreto){
        let textoTentativa = tentativas > 1 ? "tentativas":"tentativa"
        let mensagemTentativa = `Você descobriu o número secreto! com ${tentativas} ${textoTentativa}`
        trocarTexto("h1", `Acertou`);
        trocarTexto("p", mensagemTentativa);
        butao = document.getElementById('reiniciar').removeAttribute('disabled')

        // novoJogo();
    } else{
        if(valorChutado < numeroSecreto){
            trocarTexto("p",`O número secreto é maior que o ${valorChutado}`);
        } else{
            trocarTexto("p",`O número secreto é menor que o ${valorChutado}`);
        }
    tentativas++;
    limparCampo();
    };
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio()
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}  

function limparCampo(){
    valorChutado = document.querySelector('input');
    valorChutado.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// function novoJogo(){
//     butao = document.getElementById('reiniciar').removeAttribute('disabled+')

// }



