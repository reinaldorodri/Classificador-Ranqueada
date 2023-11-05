function calcularRanqueadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

// Estrutura de decisão para Ranquear Herói
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias > 100) {
        nivel = "Imortal";
    }

    return `O Herói tem ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}

const vitorias = 110;
const derrotas = 9;
const resultado = calcularRanqueadas(vitorias, derrotas);
console.log(resultado); // Exibe a mensagem com o resultado
