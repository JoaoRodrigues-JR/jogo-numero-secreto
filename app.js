let listaChutesTentados = [];
let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);
let numeroTentativas = 1;

function mensagemInicial (){
    textoHtml('h1', 'Número Secreto');
    textoHtml('p', 'Insira um valor de 1 até 1000');
}
mensagemInicial ();

function textoHtml (tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}
function verificarChute(){
    
    let numeroChute = document.querySelector('input').value;
    
    if (listaChutesTentados.includes(numeroChute)){
        textoHtml('p', 'Você já tentou esse número');
        return verificarChute(); 
        
    } else { 
        listaChutesTentados.push(numeroChute);
    }
    
    if(numeroChute == numeroAleatorio){
        textoHtml('h1', 'Parabéns');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${numeroTentativas} ${palavraTentativa}`;
        textoHtml('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        textoHtml('h1', 'Tente novamente');
        if(numeroChute < numeroAleatorio){
            textoHtml('p', 'O número aleatório é maior');
        } else {
            textoHtml('p', 'O número aleatório é menor');
        }
        numeroTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let 
    return parseInt(Math.random() * 60 + 1);
}

function limparCampo(){
    numeroChute = document.querySelector('input');
    numeroChute.value = '';
}

function novoJogo (){
    numeroAleatorio = gerarNumeroAleatorio();
    listaChutesTentados = [];
    numeroTentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}