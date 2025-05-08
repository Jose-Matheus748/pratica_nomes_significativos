/**
 * Exercício 1: Variáveis com nomes ruins
 * Problema: As variáveis abaixo têm nomes ruins que não comunicam sua intenção.
 */
function calcularTotal(produtos, desconto, taxa) {
  let subtotal = 0;
  for (let indice = 0; indice < produtos.length; indice++) {
    const valor = produtos[indice].preco * produtos[indice].quantidade;
    if (produtos[indice].tipo === "alimento") {
      subtotal += valor * (1 + taxa.alimentos);
    } else {
      subtotal += valor * (1 + taxa.geral);
    }
  }
  return subtotal - desconto;
}

const produtos = [
  { preco: 10, quantidade: 2, tipo: "alimento" },
  { preco: 10, quantidade: 2, tipo: "alimento" },
];

const desconto = 10;

const taxa = { alimento: 0.1, geral: 0.05 };

const resultado = calcularTotal(produtos, desconto, taxa);

console.log(resultado);