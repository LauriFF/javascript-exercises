const findTheOldest = function(obj) {
    // etsi vanhin syntymävuoden ja kuolinvuoden perusteella
    /* 
    Tarvitsemme objektista syntymävuoden ja kuolinvuoden.
    miinustamme nämä toisistaan ja vanhimman nimi valitaan.
    palautetaan vanhimman nimi
    */
    // Jos objekti on tyhjä palautetaan null
    if(obj.length === 0) return null;
    // käydään kaikki objektin kohdat läpi
    const testi = obj.reduce((oldest, person) => {
        // vertaillaan aina kerrallaan kahta objektin kohtaa joista toinen laitetaan jatkoon vertailemaan seuraavaa
        // lasketaan aluksi kahden kohdan eliniät, jos ei ole kuolinvuotta, laitetaan || operaattorilla default arvo täksi päiväksi
        const age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
    // Palautetaan vanhempi henkilö jatkoon seuraavaa vertailua varten
    return age > oldestAge ? person : oldest;
    });
    return testi;
//    return obj.reduce((oldest, hlö) => {
//     const age = (hlö.yearOfDeath - hlö.yearOfBirth);
//     const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
//     return age > oldestAge ? hlö : oldest;
//    }).name;
};
// console.log(findTheOldest([
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]));

// Do not edit below this line
module.exports = findTheOldest;
