const sumAll = function(a,b) {
    // funktio ottaa kaksi positiivista numeroa argumenttina
    // luo array luvuista näiden kahden välillä sisältäen a ja b
    // Miten saan 4,8 välillä olevat numerot?
    // valitse pienin numero
    const small = Math.min(a,b);
    let smallBegin = small;
    const big = Math.max(a,b);
    let num = 0;
    const array1 = [small];
    if(typeof a !== 'number' || typeof b !== 'number' || small <= 0 || big <= 0 || !Number.isInteger(small) || !Number.isInteger(big)  ) {
        // || typeof a === 'string' || typeof b === 'string'
        return 'ERROR';
    }
    // lisää siihen +1 kunnes saavutat korkeamman numeron
    for (let i = 0; smallBegin < big; i++) {
        console.log(` smallbegin alussa ${smallBegin}`)

        smallBegin++;
        console.log(` smallbegin lopussa ${smallBegin}`)
        array1.push(smallBegin);
        // kokeile array1[i] = smallbegin jos tämä ei toimi
    }
    // array1.push(big);
    const uusi = array1.reduce((value,nextNum) => value += nextNum ,0 )
    console.log(array1);
    return uusi;


    // aina kun lisäät numeron, lisää myös uuteen muuttujaan yksi lisää
    // (näin saat tietää montako numero tulee väliin)
    
    // yhdistä tämän arrayn kaikki alkiot yhdeksi ja palauta se
};

console.log(sumAll(2,4))

// Do not edit below this line
module.exports = sumAll;
