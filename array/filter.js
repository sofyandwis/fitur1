let numbers = [1, 2, 3, 4, 5, 6];

// bilangan ganjil
let newNumbers = numbers.filter(n => n % 2 !== 0);
console.log(newNumbers);

let people = ["Agus", "Shofyan", "Dwi", "Saputro"];

// panjang < 5
let newPeople = people.filter(p => p.length < 5)
console.log(newPeople);

// mengandung kata "io"
let newPeople2 = people.filter(p => p.includes("i"))
console.log(newPeople2);