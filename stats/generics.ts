class House {
  print(): void {
    console.log("I'm a house")
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars(arr: Printable[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHousesOrCars([new House()])
