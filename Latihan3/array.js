/**
 * Latihan 1
 * 
 * A punya koleksi arloji yang dia banggakan, 
 * dan teman-teman nya ingin bertanya koleksi arloji 
 * apa saja yang dia punya
 * 
 * let watches = ["Swiss Army","Daniel Wellington","Dublot"]
// Hasil yang di harapkan : Saya punya Swiss Army, Daniel Wellington, dan
Dublot.

Hasil harus sama persis seperti yang di contohkan, dimana :
1. Result di print dalam 1 string
2. Tanda ',' (koma) dan '.' (titik) harus sesuai
 * 

let arloji = ['A', 'B', 'C', 'D','E']
// Hasil yang di harapkan : Saya punya A, B, C, D, dan E.


 * */ 

let watches = ["Swiss Army","Daniel Wellington","Dublot"]
let koleksi = 0;
for (let i = 0; i < watches.length; i++) {
    if (watches[i] !== ' ') {
        koleksi += watches[i]
    } else { 
        console.log("saya punya " + koleksi)
        koleksi = ''
    }
    if (i === watches.length - 1) {
        console.log("saya punya " + koleksi);
    }
}
/**
 * Latihan 2
 * 
 * Mengelompokkan sebuah array menjadi per alfabeth
 * 
 * Diberikan sebuah array 1 dimensi fruits sebagaiberikut:
 let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
 * 
 // Result
 [
 ["avocado","apple"],
 ["blueberry"],
 ["cherry","cranberry"]
]
 * 
 * */ 

let fruits = ["cherry","blueberry","avocado","apple","cranberry"]