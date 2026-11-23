function calcularIdade(ano, mes, dia) {}

function verificarFaixaEtaria(idade) {
  if (idade >= 65) {
    return "você é idoso";
  } else if (idade >= 25) {
    return "você é adulto";
  } else if (idade >= 18) {
    return "você é jovem adulto";
  } else {
    return "você é criança";
  }
}
function metrosCentimetros(metros) {
  return metros * 100;
}
