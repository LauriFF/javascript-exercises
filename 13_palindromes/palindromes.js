const palindromes = function (str) {
    // poista välit esirkoiemsetkit ja muuta pieniksi
    const uusi = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const käännetty = uusi.split('').reverse().join('');
    return uusi === käännetty;
};
// Do not edit below this line
module.exports = palindromes;