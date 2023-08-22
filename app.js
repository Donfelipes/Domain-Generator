// Se crean 3 variables que contienen cada uno, un array.
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

// Se crean ciclos for anidados para que recorran por completo cada variable y así guardar esto en la variable webSiteName,
// dando como resultado la concatenación de estos strings

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let webSiteName = pronoun[i] + adj[j] + noun[k] + '.com';
            console.log(webSiteName);
        }
    }
}