// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi
// fino a quando ne avrà tanti quanti l’altro.

var arr1 = ["Cane1", "Cane2", "Cane3", "Cane4", "Cane5"];
var arr2 = ["Gatto1", "Gatto2"];

for (var i = 0; i < arr1.length; i++) {
  if (arr1.length > arr2.length) {
    arr2.push("nuovoGatto");
  }
};

console.log(arr1, arr2);
