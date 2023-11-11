"use strict";
class House {
    print() {
        console.log("I'm a house");
    }
}
function printHousesOrCars(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars([new House()]);
