/**
 * SOAL 1 
 * 
 * Klasifikasi level untuk karakter dalam sebuah game terdiri dari detail berikut:
 * 
 *  interval             status
 * lebih dari 100       Expert
 * antara 70 dan 100    Pro
 * antara 50 dan 70     Normal
 * antara 30 dan 50     Basic
 * kurang dari 30       Beginner
 * 
 * Proses klasifikasi tersebut adalah jika Power dari sebauh karakter 75 maka result nya :
 *  "Character is Pro"
 * 
 *
 */ 


// let power = 75;
// if (level >100){
//     console.log("You are expert")
// } else if (level >70 && <=100){
//     console.log("You are Pro")
// } else if (level >50 & <70){
//     console.log("You are Normal")
// } else if (level >30 & >50){
//     console.log("You are Basic")
// } else if(level <30){
//     console.log("you are Begineer")
// }


/**
 * SOAL 2
 * 
 * Sebuah vending machine dapat menginput sebuah string dan memberikan sebuah minuman, berikut
list nya:
    a. "Sweet Tea" 
    b. "Plain Tea"
    c. "Boba"
    d. "Milk Coffee" 
    e. "Choco Ice"
 * 
 * */ 


// let minuman = "Sweet Tea";

// switch (minuman) {
//     case 'Sweet Tea':
//         console.log("You choose Sweet Tea, thanks.")
//         break;
//     case 'Plain Tea':
//         console.log("You choose Plain Tea, thanks.")
//         break;
//     case 'Boba':
//         console.log("You choose Boba, thanks.")
//         break;
//     case 'Milk Coffee':
//         console.log("You choose Milk Coffee, thanks.")
//         break;
//     case 'Choco Ice':
//         console.log("You choose Choco Ice, thanks.")
//         break;
//     default:
//         if (minuman === "") {
//             console.log("Input minuman is not defined")
//         } else {
//             console.log("minuman is not defined")
//         }
//         break;
// }


/**
 * SOAL 3
 * 
 *  E-commerce memberikan cashback besar-besaran menggunakan coupon code. S
 * eorang pembeli akan dapat cashback dari total pembelian barang yang dia beli. 
 * Berikut rincian coupon:
 * 
 * a. FreeOngkir
     * Jika pembelian lebih dari atau sama dengan 50000. Maka akan ada potongan 10%.
     * Jika pembelian antara 30000 dan 50000. Maka akan ada potongan 5%.
     * Jika kurang dari 30000. Maka akan ada potongan 2.5%
 * Free15%
 *  Jika pembelian lebih dari atau sama dengan 30000. Maka akan ada potongan 15%.
 *  Jika kurang dari 300000. Maka akan ada potongan 0%
 * 
 * 
 * Total pembelian 100000 dan memilih coupon FreeOngkir, 
 * maka result: "Total pembelian anda Rp. 90000"
 * */ 


 let price = 90000
 let coupon = "FreeOngkir"
 let total;
 
 switch (coupon) {
     case "FreeOngkir":
         if (price >= 50000) {
             total = price - price * 0.1
         } else if (price >= 30000 && price <= 50000) {
             total = price - price * 0.05
         } else {
             total = price - price * 0.025
         }
         break;
     case 'Free15%':
         if(price >= 30000){
             total = price - price*0.15
         } else {
             total = price
         }
         break;
     default:
         console.log("Coupon is not available!")
         break;
 }
 console.log("Total yang dibayar adalah Rp. " + total)