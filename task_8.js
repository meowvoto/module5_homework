let myMap = new Map([
    [1, 'ichi'],
    [2, 'ni'],
    [3, 'san'],
    [4, 'yon'],
    [5, 'go'],
    [6, 'roku'],
    [7, 'nana'],
    [8, 'hachi'],
    [9, 'kyuu'],
    [10, 'juu']
]);

for (let result of myMap) {
  console.log(`Ключ - ${result[0]}, значение - ${result[1]}`);
};

// let keys = myMap.keys();
// let values = myMap.values();
// for (let i = 0; i < myMap.size; i++) {
//   console.log(`Ключ - ${keys[i]}, значение - ${values[i]}`);
// }; // возвращает "Ключ - undefined, значение - undefined". keys и values не массивы?