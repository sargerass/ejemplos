

function getPricePalta(countPalta) {
    const config = [
        {off: 6, price: 5},
        {off: 3, price: 3},
        {off: 1, price: 1.25}
    ];
    let price = 0;
    config.forEach( value => {
        var count = Math.floor(countPalta / value.off);
        countPalta = countPalta % value.off;
        price += count*value.price;
    });
    return roundPrice(price);
}
function getPriceAzucar(cantidad, medida) {
    const priceKIlo = 7.99;
    var config = [
        {medida: "kilo", convertion: 1},
        {medida: "libra", convertion: 0.453592},
        {medida: "onza", convertion: 0.0283495}
    ];
    var element = config.find( res => {
        return res.medida == medida;
    });
    price = cantidad*element.convertion*priceKIlo;
    return roundPrice(price);
}
function roundPrice(price) {
    return Math.round(price*100)/100;
}
function test() {
    var arrayCasosPalta = [
        {input:4, result: 4.25},
        {input:6, result: 6},
        {input:7, result: 7.25},
        {input:0, result: 0},
    ];
    var arrayCasosAzucar = [
        {input: 2, type: "kilo", result: 15.98},
        {input: 5, type: "libra", result:18.12},
        {input: 15, type: "onza", result: 3.4}
    ];
    arrayCasosPalta.forEach( (res) => {
        var price = getPricePalta(res.input);
        var result = res.result == price;
        console.log("caso palta", result , "input", res.input, "esperado", res.result, "resuelto", price);
    } );

    arrayCasosAzucar.forEach( (res) => {
        var price = getPriceAzucar(res.input, res.type);
        var result = res.result == price;
        console.log("caso azucar", result , "input", res.input, "unidad", res.type, "esperado", res.result, "resuelto", price);
    } );
}
test();