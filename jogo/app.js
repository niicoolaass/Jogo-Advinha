let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) { // essa função pegou tags do html para inserir texto pelo js
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { // essa função está inserindo textos no html
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() { // essa função vai verificar o chute
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) { // se o chute for verdadeiro 
        exibirTextoNaTela('h1', 'Acertou');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) { // se o chute for maior que o número secreto
        exibirTextoNaTela('p', 'O número secreto é menor');
        
    } else { // se o chute for menor que o numero secreto
        exibirTextoNaTela('p', 'O número secreto é maior');
    }

    tentativas++;

    limparCampo();
}

function gerarNumeroAleatorio() { // essa função vai gerar um número aleatório entre 1 - 10
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // length - vai ler o tamanho da lista

    if (quantidadeDeElementosNaLista == numeroLimite) { //se o tamanho da lista atingir o limite (10) ele vai resetar o tamanho da lista para ser sorteado novos numeros
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { //includes - vai verificar se tem um numero escolhido dentro da array, se haver ele executa um return para gerar um novo numero
        return gerarNumeroAleatorio();

    } else { // caso não tenha, o numero escolhido é guardado dentro da array e gera um novo numero 
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() { // essa função vai limpar o campo do input após chutar um número
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() { //essa função vai reiniciar o jogo
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
