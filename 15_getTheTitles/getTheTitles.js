const getTheTitles = function(books) {
    // käy läpi objektin jokainen kohta ja poimi titlet ja luo niistä array
    const titlet = books.reduce((acc, currentValue) => {
        acc.push(currentValue.title);
        return acc;
    },[]);
    // console.log(titlet);
    return titlet;
};

// Do not edit below this line
module.exports = getTheTitles;
