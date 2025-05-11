const removeFromArray = function(arr, ...arguments) {
    // luo arrayLista muuttuvasta argumenttimäärästä
    let indexes = [];
    // käy läpi arr jokainen kohta
    // console.log(`arguments: ${arguments}`)
    for (let i = 0; i < arr.length; i++) {
        // etsi onko arr:ssa argumentteja
        for (let j = 0; j < arguments.length; j++) {
            if(arr[i] == arguments[j]) {
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
        arr.splice(indexes[i],1)
    }
    // console.log(arr);
    // jos on luo niiden indekseistä oma arrLista
    return arr;
};
// removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
