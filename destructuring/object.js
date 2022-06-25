// Object destructuring

let mahasiswa = {

  umur: 20,
};

// let nama, umur;

// cara biasa
// nama = mahasiswa.nama;
// umur = mahasiswa.umur;

// cara destructuring (harus saat deklarasi)
let {nama, umur} = mahasiswa;

console.log(nama, umur);

console.log(mahasiswa);