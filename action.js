// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi
// fino a quando ne avrà tanti quanti l’altro.

var arr1 = ["Cane1", "Cane2", "Cane3", "Cane4", "Cane5"];
var arr2 = ["Gatto1", "Gatto2"];

if (arr1.length == arr2.length){
  console.log("Non faccio nulla");
} else if (arr1.length > arr2.length){
  var maxArr = arr1;
  var minArr = arr2;
} else {
  var maxArr = arr2;
  var minArr = arr1;
}

var diff = maxArr.length - minArr.length;

for (var i = 0; i < diff; i++) {
    var nuovogatto = prompt("Inserisci il nuovo numero con Gatto")
    minArr.push(nuovogatto);
};

console.log(arr1, arr2);
