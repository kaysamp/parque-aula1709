import fs from "node:fs";

const texto = fs.readFileSync("src/rules/rules.json", "utf-8");
const parque = JSON.parse(texto);

export function VerificarEntrada(dados, brinquedo) {
  const pessoa = JSON.parse(dados);
  const brinquedos = parque.Parque[0].brinquedos;
  const regras = parque.Parque[1].regras;
}
