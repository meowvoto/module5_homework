let string = prompt("Напишите что-либо");
let length = string.length;
let reverseString = "";

if (length == 0) {
    console.log("Вы ничего не написали, попробуйте снова");
} else {
for (let i = length; i > 0; i--) {
    let sign = string.slice(i-1, i);
    reverseString = reverseString.concat(sign);
}
console.log(reverseString);
}

// Задача из 5.4. К этому моменту мы знаем только про логические типы, условные выражения и строки/числа. Эта задача решается при использовании только этих знаний? Так как предполагается, что циклы, а также массивы и функции, с помощью которых можно было также решить эту задачу, мы еще не прошли