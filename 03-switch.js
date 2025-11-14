const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um número: "))

function diaDaSemana() {
    let resultado;

    switch (num) {
        case 1:
            resultado = "Domingo";
            break;
        case 2:
            resultado = "Segunda-feira";
            break;
        case 3:
            resultado = "Terça-feira";
            break;
        case 4:
            resultado = "Quarta-feira";
            break;
        case 5:
            resultado = "Quinta-feira";
            break;
        case 6:
            resultado = "Sexta-feira";
            break;
        case 7:
            resultado = "Sábado";
            break;
        default:
            resultado = "Dia inválido"
    }

    return resultado;

}

module.exports = diaDaSemana