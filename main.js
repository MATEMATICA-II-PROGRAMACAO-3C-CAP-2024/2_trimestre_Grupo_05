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
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textContent = calculaTempo(tempos[0]);
contadores[1].textContent = calculaTempo(tempos[1]);
contadores[2].textContent = calculaTempo(tempos[2]);
contadores[3].textContent = calculaTempo(tempos[3]);

for (let i = 0; i < contadores.length; i++) {
    contadores[0].textContent = calculaTempo(tempos[0]);
    }

    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
        }
        contadores[i].textContent = calculaTempo(if (tempoFinal > 0)){
            return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
            } else { 
    return "Prazo Finalizado"; 

            }
        
        function atualizaCronometro(){
            for (let i=0; i<contadores.length;i++){
            contadores[i].textContent = calculaTempo(tempos[i]); } }
           
            function comecaCronometro(){
                atualizaCronometro();
                setInterval(atualizaCronometro,1000); }
                comecaCronometro();
