import { calcularIdade } from "./src/scripts/calculadoras.js";
import { verificarFaixaEtaria } from "./src/scripts/calculadoras.js";
import { metrosCentimetros } from "./src/scripts/calculadoras.js";
import { verificarEntrada } from "./src/rules/rules.js"

const idade = calcularIdade(ano, mes, dia);
const faixaEtaria = verificarFaixaEtaria(idade);
const altura = metrosCentimetros(metros);

if (faixaEtaria === "você é criança" || faixaEtaria === "você é idoso") {
    console.log("É preciso de um acompanhante.");
}
const pessoa = {
    nome: nome,
    idade: idade,
    altura: altura
};

const dados = JSON.stringify(pessoa);

const resultado = VerificarEntrada(dados, brinquedo);

console.log(resultado);


const nome = process.argv[2];
const data = process.argv[3];
const tamanho = process.argv[4];
const brinquedo = process.argv[5];
