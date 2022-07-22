/**
 *  Untuk menghitung massa jenis sebuah benda di perlukan rumus berikut:
 * rho = massa / volume
 * Tentukan algoritma dan pseudocode untuk menghitung rumus tersebut
 * */ 


// var massa = 2
// var volume = 3

// let massaJenis (massa / volume);
// console.log(massaJenis);


/**
 * Diketahui rumus luas permukaan tabung adalah:
 * luas_permukaan_tabung = (2 x phi x tinggi x r) + (2 x phi x r x r)
 * 
 * 
 * Tentukan algoritma dan pseudocode untuk menghitung rumus tersebut
 * */ 


 function cylinder(radius, height) {

    var r = radius;
    var h = height;
   
    return {
      surfaceArea: function() {
         return 2*Math.PI*r*h + 2*Math.PI*r*r;
      }
     // ...more methods
    };
   }
   
   
   var c1 = cylinder( 5, 100 );
   var c2 = cylinder( 5, 200 );
   
   console.log( c1.surfaceArea() );

   