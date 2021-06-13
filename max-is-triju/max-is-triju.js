// 2. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš trijų aprašytų.

//  Papildomai:

//  *Visi skaičiai yra paimami iš skirtingų input laukelių.

//  *Rezultatas išvedamas neaktyviame(disabled) input laukelyje.
// 3. Patikrinkite, ar iš trijų įvestų trikampio kraštinių galima sudaryti trikampį.

"use strict"

let a, b, c, max;

function palyginimas() {
    a = document.getElementById("first").value;
    b = document.getElementById("second").value;
    c = document.getElementById("third").value;
    console.log("Reikšmė A: " + a + " Reikšmė B: " + b + " Reikšmė C: " + c);

    max = a;
    console.log("MAX pradinis: " + a);

    if (b > max && b >= c) {
        max = b;        
    } else { if (c >= max && c > b) {
        max = c;        
    } else { if (a == b && b == c) {
        max = ("Skaičiai vienodi");        
    } else {
        max = max;
    } 
} 
}
     if (((a+b) > c) && ((a+c) > b) && ((b+c) > a)) {
         document.getElementById("triangle").value = "Trikampį sudaryti galima"
     } else {
        document.getElementById("triangle").value = "Trikampio sudaryti negalima"
     }
    
    document.getElementById("bigger").value = max;
    console.log("Max: " + max);
    console.log("Reikšmė A: " + a + " Reikšmė B: " + b + " Reikšmė C: " + c);


}