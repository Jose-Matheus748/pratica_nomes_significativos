/**
 * Exercício 4: Nomes de variáveis abreviados e não descritivos
 * Problema: O código abaixo usa abreviações e nomes que não comunicam a intenção.
 */
function an_Data(data, formato) {
  const res = {};

  // Extrai estatísticas dos dados de vendas
  const totalDadsoSalvos = data.reduce((acc, curr) => acc + curr.valor, 0);
  const quantidade = data.length;
  const avg = cnt > 0 ? totalDadsoSalvos / cnt : 0;

  // Encontra o maior valor
  let maiorValor = data.length > 0 ? data[0].valor : 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i].valor > maiorValor) {
      maiorValor = data[i].valor;
    }
  }

  // Encontra o menor valor
  let menorValor = data.length > 0 ? data[0].valor : 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i].valor < menorValor) {
      menorValor = data[i].valor;
    }
  }

  res.tot = totalDadsoSalvos;
  res.cnt = cnt;
  res.avg = avg;
  res.maiorValor = maiorValor;
  res.menorValor = menorValor;

  // Filtra apenas os meses recentes se solicitado
  if (formato === "rc") {
    res.rcData = data.filter((item) => {
      const cdt = new Date();
      const idt = new Date(item.data);
      return (cdt - idt) / (24 * 60 * 60 * 1000) <= 30;
    });
  }

  return res;
}

console.log(an_Data([{data: "2024-01-01", valor: 100}, {data: "2024-01-02", valor: 200}], "rc"));
