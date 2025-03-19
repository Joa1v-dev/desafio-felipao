let vitorias;
let derrotas;

for (vitorias = 1; vitorias < 150; vitorias++ ) {
   
}

for (derrotas = 1; derrotas < 20; derrotas++ ) {

}

function subtrair (a, b) {
    return vitorias - derrotas;
}

let saldoRank = subtrair(vitorias, derrotas);

let ranking

if (saldoRank < 10 ) {
    ranking = "Ferro";
} else if (saldoRank >= 11 && saldoRank <= 20) {
    ranking = "Bronze";
} else if (saldoRank >= 21 && saldoRank <= 50) {
    ranking = "Prata";
} else if (saldoRank >= 51 && saldoRank <= 80) {
    ranking = "Ouro";
} else if (saldoRank >= 81 && saldoRank <= 90) {
    ranking = "Diamante";
} else if (saldoRank >= 91 && saldoRank <= 100) {
    ranking = "Lendário";
} else if (saldoRank >= 101) {
    ranking = "Imortal";
}

console.log("Você teve um total de " + vitorias + " vitórias, e " + derrotas + " derrotas, seu saldo de rank total é " + saldoRank + " isso torna você Ranking " + ranking);
