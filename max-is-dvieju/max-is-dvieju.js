// 1. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš dviejų aprašytų.

 
// Papildomai:

// *Abu skaičiai yra paimami iš dviejų skirtingų input laukelių.

//  *Rezultatas išvedamas neaktyviame(disabled) input laukelyje.

"use strict"

let a, b, max;

function palyginimas() {
    a = parseFloat(document.getElementById("first").value);
    b = parseFloat(document.getElementById("second").value);
    console.log("Reikšmė A: " + a + " Reikšmė B: " + b);

    max = a;

    if (b > max) {
        max = b;        
    } else { if (a > b) {
        max = max;
        
    } else {
        max = ("Skaičiai vienodi");        
    }
        
    }
    document.getElementById("bigger").value = max;
    console.log("Max: " + max);


}