let nomeHeroi = prompt("Digite o nome do Herói:");
let vitoriaJogador = prompt("Digite o número de Vitórias");
let derrotaJogador = prompt("Digite o número de Derrotas:");
const saldo = vitoriaJogador - derrotaJogador;
let nivel = nivelHeroi(saldo);
console.log(`O Herói ${nomeHeroi} está no nível ${nivel}.`);
alert(`O Herói ${nomeHeroi} está no nível ${nivel}.`);

function nivelHeroi(saldo) {
  switch (true) {
    case saldo < 10:
      return "Ferro";

    case saldo <= 11 || saldo <= 20:
      return "Bronze";

    case saldo <= 21 || saldo <= 50:
      return "Prata";

    case saldo <= 51 || saldo <= 80:
      return "Ouro";

    case saldo <= 81 || saldo <= 90:
      return "Diamante";

    case saldo <= 91 || saldo <= 100:
      return "Lendário";

    case saldo >= 101:
      return "Imortal";
  }
}
