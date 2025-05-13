const removeFromArray = function(arr, ...argumens) {
    // luo arrayLista muuttuvasta argumenttimäärästä
    let indexes = [];
    // käy läpi arr jokainen kohta
    // console.log(`arguments: ${arguments}`)
    for (let i = 0; i < arr.length; i++) {
        // etsi onko arr:ssa argumentteja
        for (let j = 0; j < argumens.length; j++) {
            if(arr[i] == argumens[j]) {
                indexes.push(i);
            }
        }
    }
    // console.log(`indexes: ${indexes}`)

    indexes.sort((a,b) => b - a );
    // console.log(`indexes: ${indexes}`)
    // console.log(`arr: ${arr}`)

    // käy läpi jokainen arr kohta ja poista jos se on arrListassa
    for (let i = indexes.length -1; i >= 0; i--) {
        arr.splice(indexes[i],1);
    }
    // console.log(arr);
    // jos on luo niiden indekseistä oma arrLista
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
