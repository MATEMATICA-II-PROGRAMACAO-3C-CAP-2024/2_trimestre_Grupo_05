const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);
function diminuiTamanho(){

}
const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = 5;
function diminuiTamanho(){
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha;

}
}
