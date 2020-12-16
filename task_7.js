let Array1 = [1, 2, 0, null , 1, 6, 7];
let Array2 = [1, 1, 1, 1, 1, 1, 1, 1];
let odd = 0;
let even = 0;
let nulls = 0;
for (let i = 0; i < Array1.length; i++) {
    if (typeof Array1[i] === "number") {
        if (Array1[i] === 0) {
            nulls = nulls + 1;
        } else if (Array1[i] % 2 === 0) {
            odd = odd + 1;
        } else if (Array1[i] % 2 !== 0) {
            even = even + 1;
        }
        debugger;
    }
}

console.log(even);
console.log(odd);
console.log(nulls);

// или 

console.log(`Количество нечетных чисел равно ${even}`);
console.log(`Количество четных чисел равно ${odd}`)
console.log(`Количество нулей равно ${nulls}`)

