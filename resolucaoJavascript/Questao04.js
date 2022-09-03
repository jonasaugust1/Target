const faturamentos = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53,
}

const percentualDeParticipacao = (faturamentoEstado) => {

    let faturamentoTotal = Object.values(faturamentos).reduce((previus, current) => previus + current);

    percentual = (faturamentoEstado * 100) / faturamentoTotal;

    return `O percentual de faturamento da distribuidora é de ${percentual.toFixed(2)}%`;
}

console.log(percentualDeParticipacao(faturamentos.mg));