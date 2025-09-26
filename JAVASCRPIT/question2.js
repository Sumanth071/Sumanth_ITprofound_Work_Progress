//type coercion
//what happens when we add a number and a string
let a = 5;//a number
let b = "5";// a string
console.log(String(a + b));

// "5" + 5 → "55" (string concatenation)

// 5 + Number("5") → 10 (numeric addition)

//a + b → "5" + "5" → "55"

//if we want to add them as numbers

console.log(a + Number(b)); // 10

