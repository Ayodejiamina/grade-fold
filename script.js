let displaymath = document.getElementById("display_math");
let displayeng = document.getElementById("display_eng");
let displaychem = document.getElementById("display_Chem");


//Results Section
let maths = document.getElementById("maths"); 
let eng = document.getElementById("eng");
let chem = document.getElementById("chem");

// Submit Section
// let form_sec = document.getElementById("form_sec")

function grade() {
    if(maths.value >= 70){
        displaymath.innerHTML = "A Excellent";
    }else 
    if(maths.value >= 60){
        displaymath.innerHTML = "B Very good";
    }else
    if (maths.value >= 50){
        displaymath.innerHTML = "C Average";
    }else
    if (maths.value >= 40){
        displaymath.innerHTML = "D Pass";
    }else
    if(maths.value >= 1){
        displaymath.innerHTML = "F Fail";
    }else{
        displaymath.innerHTML ="NIL"
    }


    if(eng.value >= 70){
        displayeng.innerHTML = "A Excellent";
    }else 
    if(eng.value >= 60){
        displayeng.innerHTML = "B Very good";
    }else
    if (eng.value >= 50){
        displayeng.innerHTML = "C Average";
    }else
    if (eng.value >= 40){
        displayeng.innerHTML = "D Pass";
    }else
    if(eng.value >= 1){
        displayeng.innerHTML = "F Fail";
    }else{
        displayeng.innerHTML = "NIL"
    }



    if(chem.value >= 70){
        displaychem.innerHTML = "A Excellent"
    }
    if(chem.value >= 60){
        displaychem.innerHTML = "B Very good"
    }else
    if(chem.value >= 50){
        displaychem.innerHTML = "C Average"
    }
    if(chem.value >= 40){
        displaychem.innerHTML = "D Pass"
    }else
    if(chem.value >= 1){
        displaychem.innerHTML = "F Fail"
    }else{
        displaychem.innerHTML = "NIL"
    }
}
