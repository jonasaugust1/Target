const data = require("../dados.json")

const getTheMinInvoicing = () => {
    const minInvoicing = data.reduce((prev, curr) => prev.valor < curr.valor ? prev : curr);
    return `O dia de menor faturamento foi dia ${minInvoicing.dia}`;
}

const getTheMaxInvoicing = () => {
    const maxInvoicing = data.reduce((prev, curr) => prev.valor > curr.valor ? prev : curr);
    return `O dia de maior faturamento foi dia ${maxInvoicing.dia}`;
}

const daysAboveAverage = () => {

    const total = data.reduce((prev, curr) => {
        return prev + curr.valor
    }, 0);

    const average = total / data.length;

    const aboveAverage = data.filter(i => i.valor > average)
    return `O número de dias no mês em que o valor de faturamento diário
     foi superior à média mensal foi de ${aboveAverage.length} dias`;
}

console.log(getTheMinInvoicing());
console.log(getTheMaxInvoicing());
console.log(daysAboveAverage());
