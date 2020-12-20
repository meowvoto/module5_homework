let value = prompt('Введите число');
if (value.length === 0) {
    console.log('Упс, кажется, вы ошиблись');
} else {
    value = +value;
    if (typeof value !== Number && isNaN(value) === true) {
        console.log('Упс, кажется, вы ошиблись');
    } else if (value % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
