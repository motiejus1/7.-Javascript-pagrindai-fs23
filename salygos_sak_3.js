"use-strict";

//3 ir 4 uzduotis
document.querySelector("#sudaryti").addEventListener("click", function(){
    let a;
    let b;
    let c;

    a = parseInt(document.querySelector(".krastinea").value);
    b = parseInt(document.querySelector(".krastineb").value);
    c = parseInt(document.querySelector(".krastinec").value);

    //t.y jeigu a+b>c ir b+c>a ir c+a>b tada trikampi sudaryti galima
    //visais kitais atvejis trikampio sudaryti negalima
    // 3 4 5 ; statusis ivairiakrastis trikampis
    // 3+4 > 5 ir 4+5 > 3  3+5> 4

    // 1 1 9

    if(a+b>c && b+c>a && c+a>b) {
        document.querySelector("#sudarymo_rezultatas").value = "Trikampi sudaryti galima";
        if(a!=b && b!=c && c!=a) {
            // += yra tas pats kas append
            document.querySelector("#sudarymo_rezultatas").value += "Trikampis yra ivariakrastis"
        } else if(a==b && b==c && c==a) {
            document.querySelector("#sudarymo_rezultatas").value += "Trikampis yra lygiakrastis"

        } else if(a==b || b==c || c==a) {
            document.querySelector("#sudarymo_rezultatas").value += "Trikampis yra lygiasonis"
        }
        
        //pirma tikrinti ar statusis
        if(a*a + b*b == c*c || b*b + c*c == a*a || c*c+a*a == b*b) {
            document.querySelector("#sudarymo_rezultatas").value += "Trikampis yra statusis"

        } else if(a*a + b*b < c*c || b*b + c*c < a*a || c*c+a*a < b*b) {
            //trikampis bukasis
            document.querySelector("#sudarymo_rezultatas").value += "Trikampis yra bukasis"
        } else if (a*a + b*b > c*c || b*b + c*c > a*a || c*c+a*a > b*b) 
        {
            document.querySelector("#sudarymo_rezultatas").value += "Trikampis yra smailusis"

            //trikampis smailasis
        } 
        

    } else {
        document.querySelector("#sudarymo_rezultatas").value = "Trikampi sudaryti negalima";

    }


    
    //skirstymas pagal krastines
    // a!=b ir b!=c ir c!=a - ivariakrastis
    //a=b ir b=c ir c=a  - trikampis lygiakrastis
    // a==b arba b==c arba c==a - trikampis ir lygiasonis

    //pagal kampa
    //bukasis a^2+b^2 < c^2 arba b^2+c^2 < a^2 arba c2 + a^a < b^2
    //statusis a^2+b^2 = c^2, trikampis statusis
    //smailasis a^2+b^2 > c^2
})