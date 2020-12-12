let x;  // Дана переменная Х, которая может принимать любое значение.
let y;
y = typeof x;
switch (y) {
    case ("number"):
        console.log("X - число");
        break;
    case ("string"):
        console.log("Х - строка");
        break;
    case ("boolean"): 
        console.log("X - логический тип");
        break;
    default:
        console.log("Тип X не определен"); 
}