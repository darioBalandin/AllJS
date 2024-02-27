import fs from "fs";

function readWords(path) {
  let es = fs.readFileSync(path, "utf8", (err, data) => {
    if (err) throw err;
    return data;
  });

  let array = es.split("\r\n");
  return array;
}

function wagnerFischer(word, dict_word){
    let m = word.length;
    let n = dict_word.length;
    let matrix = new Array(m+1).fill(null).map(() => new Array(n+1).fill(null));
    
    for (let i = 0; i <= m; i++) {
        matrix[i][0] = i;
    }
    
    for (let j = 0; j <= n; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
        let cost = word[i-1] === dict_word[j-1] ? 0 : 1;
        matrix[i][j] = Math.min(
            matrix[i-1][j] + 1,
            matrix[i][j-1] + 1,
            matrix[i-1][j-1] + cost
        );
        }
    }
    
    return matrix[m][n];

}

function distanceChecker(word, array_words){
    let map = new Map();
    for (let i = 0; i < array_words.length; i++) {
        let dist = wagnerFischer(word, array_words[i]);
        map.set(array_words[i], dist);
    }
    
    let sorted_map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

    let arrTemp = Array.from(sorted_map).slice(0,10);
    return new Map(arrTemp);

}

let array_words= readWords("words.txt");

let palabra = "smart";
let result = distanceChecker(palabra, array_words);
console.log("----- Sugerencias más cercanas ----------");
result.forEach( (k,v)=>{
    console.log(`Palabra: ${v} , distancia: ${k}`)
} )
