// 2. Suprogramuokite skriptą, kuris rastų didžiausią skaičių iš trijų aprašytų.

//  Papildomai:

//  *Visi skaičiai yra paimami iš skirtingų input laukelių.

//  *Rezultatas išvedamas neaktyviame(disabled) input laukelyje.
// 3. Patikrinkite, ar iš trijų įvestų trikampio kraštinių galima sudaryti trikampį.

"use strict"



function palyginimas() {

    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let c = document.getElementById("third").value;
    console.log("Reikšmė A: " + a + " Reikšmė B: " + b + " Reikšmė C: " + c);

    let max = a;
    console.log("MAX pradinis: " + a);

    if (b > max && b >= c) {  //veikia jei skaičiai iš tiek pat skaitmenų????
        max = b;  
        console.log("if1 Max: " + max);
        document.getElementById("bigger").value = max;      
    } else { if (c >= max && c > b) {
        max = c;    
        console.log("if2 Max: " + max);
        document.getElementById("bigger").value = max;    
    } else { if (a == b && b == c) {
        max = ("Skaičiai vienodi");    
        console.log("if3 Max: " + max);
        document.getElementById("bigger").value = max;    
    } else {
        max = max;
        console.log("if4 Max: " + max);
        document.getElementById("bigger").value = max;
    } 
    } 
    }
    console.log("Max: " + max);
    document.getElementById("bigger").value = max;

     if (((a+b) > c) && ((a+c) > b) && ((b+c) > a)) { //neveikia, nežinau kodėl
         document.getElementById("triangle").value = "Trikampį sudaryti galima";
     } else {
        document.getElementById("triangle").value = "Trikampio sudaryti negalima";
     }
    


}