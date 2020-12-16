let exampleArray1 = [1, "два", 0, "четыре", 1, 6, 7];
let exampleArray2 = [1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 0; i < exampleArray1.length - 1; i++) {
    if (exampleArray1[i] == exampleArray1[i + 1]) {
        if (i == exampleArray1.length - 2) {
            console.log(true);
        }
    } else {
        console.log(false);
        break;
    }
}
