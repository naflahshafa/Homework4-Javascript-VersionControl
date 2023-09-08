// Membuat array bilangan dengan 100 angka acak dalam rentang 1-50
let bilangan = [];

for (let i = 0; i < 100; i++) {
    let bilanganAcak = Math.floor(Math.random() * 50 + 1);
    bilangan.push(bilanganAcak);
}

// Membuat 2 array masing-masing berisi index genap dan index ganjil dari array bilangan
let indexGenap = []
let indexGanjil = []


// Membuat for loop jika ingin mengisi array berdasarkan index genap dan ganjil dari array bilangan
for (index = 0; index < bilangan.length; index++) {
    if (index % 2 == 0) {
        // Indeks genap
        indexGenap.push(bilangan[index]);
    } else {
        // Indeks ganjil
        indexGanjil.push(bilangan[index]);
    }
}


// Membuat fungsi maksimum untuk mencari nilai terbesar dari array index genap dan index ganjil
function maximum (x){
    let max = x[0]
    for (index = 0; index < x.length; index++){
        if (max < x[index]){
            max = x[index]
        }
    }
    return max
}

let nilaiMaxGenap = maximum(indexGenap)
let nilaiMaxGanjil = maximum(indexGanjil)


// Membuat fungsi minimum untuk mencari nilai terkecil dari array index genap dan index ganjil
function minimum (x){
    let min = x[0]
    for (index = 0; index < x.length; index++){
        if (min > x[index]){
            min = x[index]
        }
    }
    return min
}

let nilaiMinGenap = minimum(indexGenap)
let nilaiMinGanjil = minimum(indexGanjil)


// Membuat fungsi total untuk mencari total nilai dari array index genap dan index ganjil
function total (x){
    let total = 0
    for (index = 0; index < x.length; index++){
        total += x[index]
    }
    return total
}

let totalGenap = total(indexGenap)
let totalGanjil = total(indexGanjil)


// Membuat fungsi average untuk mencari nilai rata-rata dari array index genap dan index ganjil
function average (w, x){
    rata2 = w / x.length
    return rata2
}

let rata2Genap = average(totalGenap, indexGenap)
let rata2Ganjil = average(totalGanjil, indexGanjil)


// Membuat fungsi perbandingan untuk melihat perbandingan nilai setiap parameter dari array index genap dan index ganjil
function perbandingan (a, b){
    c = "index genap"
    d = "index ganjil"
    if (a == b){
        console.log("Keduanya bernilai sama \n")
    }
    else if (a > b){
        console.log("Nilai " + c + "[" + a + "]" + " lebih besar dari " + d + "[" + b + "] \n")
    }
    else if (a < b){
        console.log("Nilai " + d + "[" + b + "]" + " lebih besar dari " + c + "[" + a + "] \n")
    }
}

// Menampilkan Array Bilangan
console.log("Array bilangan: ", bilangan);
console.log("Panjang array bilangan: ", bilangan.length + "\n");

// Menampilkan Array Index Genap
console.log("Array dengan index genap: ", indexGenap);
console.log("Panjang array index genap: ", indexGenap.length + "\n");

// Menampilkan Array Index Ganjil
console.log("Array dengan index ganjil: ", indexGanjil);
console.log("Panjang array index ganjil: ", indexGanjil.length, "\n");

// Perhitungan Array Index Genap dan Index Ganjil
console.log("Nilai terbesar dalam array index genap: " + nilaiMaxGenap)
console.log("Nilai terbesar dalam array index ganjil: " + nilaiMaxGanjil + "\n")
console.log("Nilai terkecil dalam array index genap: ", nilaiMinGenap)
console.log("Nilai terkecil dalam array index ganjil: ", nilaiMinGanjil, "\n")
console.log("Total nilai dalam array index genap: " + totalGenap)
console.log("Total nilai dalam array index ganjil: " + totalGanjil + "\n")
console.log("Rata-rata nilai dalam array index genap: ", rata2Genap)
console.log("Rata-rata nilai dalam array index ganjil: ", rata2Ganjil, "\n")

// Perbandingan Array Index Genap dan Index Ganjil
console.log("Perbandingan Nilai Max:")
perbandingan(nilaiMaxGenap, nilaiMaxGanjil)

console.log("Perbandingan Nilai Min:")
perbandingan(nilaiMinGenap, nilaiMinGanjil)

console.log("Perbandingan Nilai Total:")
perbandingan(totalGenap, totalGanjil)

console.log("Perbandingan Nilai Rata-Rata:")
perbandingan(rata2Genap, rata2Ganjil)
