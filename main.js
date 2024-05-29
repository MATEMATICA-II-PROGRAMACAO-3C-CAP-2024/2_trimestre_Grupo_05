const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);

const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros ='0123456789';
const simbolos = '!@%*?';''
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
numeroSenha.textContent = 5;
function diminuiTamanho(){
    if (tamanhoSenha > 1){
      // tamanhoSenha = tamanhoSenha-1;
    tamanhoSenha--;
}
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
      // tamanhoSenha = tamanhoSenha+1;
      tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
geraSenha();
function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
let numeroAleatorio = Math.random()*letrasMaiusculas.length;
numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];
}
campoSenha.value = senha;
}
campoSenha.value = letrasMaiusculas;
const checkbox = document.querySelectorAll('.checkbox');
for (i=0; i < checkbox.length;i++){
checkbox[i].onclick = geraSenha;}
const forcaSenha = document.querySelector('.forca');
    
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    if (entropia > 57){
    forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57 ) {
    forcaSenha.classList.add('media');
    forcaSenha.classList.add('fraca')
    
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = entropia;
    valorEntropia.textContent = "Um computador pode levar até " +
    Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
}