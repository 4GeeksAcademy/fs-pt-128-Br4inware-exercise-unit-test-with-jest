const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function(){
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe("3.5 EUR to equal 3.75 USD"); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("10 Dollars should be 1462.62 Yenes", function(){
    const yenes = fromDollarToYen(10);
    expect(yenes).toBe("10 USD to equal 1462.62 JPY"); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("1462.62 Yenes should be 8.13 Pounds", function(){
    const pounds = fromYenToPound(1462.62);
    expect(pounds).toBe("1462.62 JPY to equal 8.13 GBP");
})