const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);

const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
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
console.log(checkbox[0].checked);