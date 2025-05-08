/**
 * Exercício 2: Constantes mágicas
 * Problema: O código abaixo contém valores numéricos "mágicos" e métodos e outros valores sem significado claro.
 */
function aplicarDescontoNaPassagem(passagem) {
  const {preco} = passagem;

  const primeiroGrupo = 1;
  const segundoGrupo = 2;
  const terceiroGrupo = 3;

  const descontoPassagemPrimeiroGrupo = 0.92;
  const descontoPassagemSegundoGrupo = 0.94;
  const descontoPassagemTerceiroGrupo = 0.9;

  if (passagem.tipo === primeiroGrupo) {
    return preco * descontoPassagemPrimeiroGrupo;
  } else if (passagem.tipo === segundoGrupo) {
    return preco * descontoPassagemSegundoGrupo;
  } else if (passagem.tipo === terceiroGrupo) {
    return preco * descontoPassagemTerceiroGrupo;
  } 
  return preco;
}

const passagem = { preco: 10, tipo: 1 };
const valor = aplicarDescontoNaPassagem(passagem);
console.log(valor);
