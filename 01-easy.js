/**
 * Exercício 1: Variáveis com nomes ruins
 * Problema: As variáveis abaixo têm nomes ruins que não comunicam sua intenção.
 */
function ct(a, d, tipo) {
  let r = 0;
  for (let indice = 0; indice < a.length; indice++) {
    const v = a[indice].p * a[indice].q;
    if (a[indice].tipo === "alimento") {
      r += v * (1 + tipo.alim);
    } else {
      r += v * (1 + t.geral);
    }
  }
  return r - d;
}

console.log(
  ct(
    [
      { p: 10, q: 2, tipo: "alimento" },
      { p: 10, q: 2, tipo: "alimento" },
    ],
    10,
    { alim: 0.1, geral: 0.05 }
  )
);
