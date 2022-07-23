/**
 * SOAL 1
 * 
 * Faktor merupakan deretan angka yang membentuk suatu angka tertentu.
Contoh: Faktor dari 10 adalah angka 1, 2, 5 dan 10.
Ciri-ciri faktor adalah angka tersebut habis membagi.
var number = 10;
// Results
// 1,2,5,10
 * 
 * 
 * */

// var number = 10;
// for (i = 1; i <= n; i++) {
//   if(n %i == 0){
//     console.log(number);
//   }
// }

/**
 * SOAL 2
 * 
 *  Print segitiga
 * 
 * var n = 5;
// Result
/*
#
#X
#X#
#X#X
#X#X#
*/

var num = 5;
var temp = "";

for (var i = 0; i < num; i++) {
  for (var j = 0; j <= i; j++) {
    temp += j + 1;
  }
  console.log(temp);
  temp = "";
}


/**
 * SOAL 3
 * 
 * Print sebuah kotak
 * 
 * var input = 5;
// Result
#####
#   #
#   #
#   #
#####
 * 
 * */ 


// var num = 5;
// var temp = "";
// for (var i = 0; i < num; i++){
//     for (var j = 0; j< num; j++){
//         temp += "#"
//     }
//     console.log(temp)
//     temp = ""
// }