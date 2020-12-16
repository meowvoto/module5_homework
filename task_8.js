let simpleObject = new Map([
    [1, 'ichi'],
    [2, 'ni'],
    [3, 'san'],
    [4, 'shi'],
    [5, 'go'],
    [6, 'roku'],
    [7, 'nana'],
    [8, 'hachi'],
    [9, 'kyuu'],
    [10, 'juu']
]);

let keys = simpleObject.keys();

keys = keys.map (item, index, array) {
    item = item + "";
    item = `Ключ — ${item}`

};

let values = simpleObject.values();