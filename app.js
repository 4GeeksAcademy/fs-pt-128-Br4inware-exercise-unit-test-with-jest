const oneEuroIs = {
 "JPY":156.5,
 "USD":1.07,
 "GBP":0.87,
}


const fromEuroToDollar = (eur) =>{
    let result = Number((eur * oneEuroIs.USD).toFixed(2))
    return `${eur} EUR to equal ${result} USD`
}

const fromDollarToYen = (usd) =>{
    let resultToEur = usd * 1 / oneEuroIs.USD
    let result = Number((resultToEur * oneEuroIs.JPY).toFixed(2));
    return `${usd} USD to equal ${result} JPY`
}

const fromYenToPound = (jpy) =>{
    let resultToEur = jpy * 1 / oneEuroIs.JPY
    let result = Number((resultToEur * oneEuroIs.GBP).toFixed(2));
    return `${jpy} JPY to equal ${result} GBP`
}

console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(10));
console.log(fromYenToPound(1462.62));
module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};