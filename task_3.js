let string = prompt("Напишите что-либо");
let length = string.length;
let reverseString = "";

if (length === 0) {
    console.log("Вы ничего не написали, попробуйте снова");
} else {
for (let i = length; i > 0; i--) {
    let sign = string.slice(i-1, i);
    reverseString = reverseString.concat(sign);
}
console.log(reverseString);
}
