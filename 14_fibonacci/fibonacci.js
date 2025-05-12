const fibonacci = function(target) {
    // tavoite saada fibonazzin numerosarjalta target indeksin luku.
    // luodaan result muuttuja
    if(typeof target !== 'number') {
        target = parseInt(target);
    }
    let result = [1,1];
    let a = 1;
    let b = 1;
    // luodaan niin pitkään arrayta että arrayn length tulee samaksi kuin target
    for (let i = 1; i < target; i++) {
        let next = a + b;
        result.push(next);
        b = a;
        a = next;
        }
    // [1,1,]
    // palautetaan arrayn target indeksillä oleva numero
    console.log(result);
    if(target === 0) return 0;
    if(target < 0) return 'OOPS';
    return result[target - 1];
};

// Do not edit below this line
module.exports = fibonacci;
