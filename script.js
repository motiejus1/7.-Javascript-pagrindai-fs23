//1. Skaiciu apvertimas
// a = 5
// b = 4
//  a= 4; b=5

//laikinojo kintamojo taikyma
// c = 0; tuscias

//ivedamos tam tikros taisykles i kompiliatoriu
"use-strict";
let skaicius1, skaicius2, skaicius3, skaicius4;
skaicius1= 5;
skaicius2= 4;
skaicius3= 2;
skaicius4= 10;

console.log("Sena reiksme skaicius1 " + skaicius1);
console.log("Sena reiksme skaicius2 " + skaicius2);
console.log("Sena reiksme skaicius3 " + skaicius3);
console.log("Sena reiksme skaicius4 " + skaicius4);

//sukeisti reiksmes pasinaudojant laikinuoju kintamuoju skaicius1 ir skaicius2
// skaicius1 yra 5, skaicius2 = 4 ->skaicius1 yra 4 skaicius2 = 5

let laikinasis;
laikinasis = skaicius1; // laikinasis = 5
skaicius1 = skaicius2; // skaicius1 = 4
skaicius2 = laikinasis;// skacius2 = 4

console.log("Skaicius1 = " + skaicius1); //su + mes sujungiame teksta
console.log("Skaicius2 = " + skaicius2);

//sukeisti skaicius3 ir skaicius4

// aritmetinis
skaicius3 = skaicius3 + skaicius4;// skaicius3 = 2 + 10 = 12
skaicius4 = skaicius3 - skaicius4;// skaicius4 = 12 - 10 = 2
skaicius3 = skaicius3 - skaicius4; // skaicius3 = 12 - 2 = 10

console.log("Skaicius3 = " + skaicius3); //su + mes sujungiame teksta
console.log("Skaicius4 = " + skaicius4);

alert("Skaicius3 = " + skaicius3 + " Skaicius4 = " + skaicius4 + " Skaicius2 = " + skaicius2 + " Skaicius1 = " + skaicius1  );
// apkeitimas su masyvu
//naudojant rodykles
//ir naudojant binarini koda(XOR)

//maksimali imanoma reiksme
let maxSkaicius;
maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);

skaicius5 = 102;
skaicius6 = 25;

//XOR operacija
// +, -, *, /
// kompiuteris 0 ir 1
//binarine aritmetika
// aritmetinio metodo: sitoje atliekame binarine sudeti ir atimti kad gautume kintamuju sukeitima

skaicius5 = skaicius5 ^ skaicius6;  //XOR binarine operacija; desimtaine sistema +
skaicius6 = skaicius5 ^ skaicius6; // XOR atimtis
skaicius5 = skaicius6 ^ skaicius5; //XOR
console.log(skaicius5);
console.log(skaicius6);

document.querySelector("#Rezultatas").append("Skaicius5 = " + skaicius5);
document.querySelector("#Rezultatas").append("Skaicius6 = " + skaicius6);