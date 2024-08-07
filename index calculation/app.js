let newValue = document.getElementById("weight");
let newValue2 = document.getElementById("height");


newValue.addEventListener("input",range);
newValue2.addEventListener("input",range);

//input tetiklendiği zaman çalışacak range fonksiyon içindeki kodlar
function range(){
   
let weight = parseInt(document.getElementById("weight").value);
document.getElementById("weightValue").textContent = weight +  "kg";

let height = parseInt( document.getElementById("height").value);
document.getElementById("heightValue").textContent = height + "cm";
   

 }

let button = document.getElementById("btn");
button.addEventListener("click",change);

// buton click olduğunda çalışacak change fonksiyon içindeki kodlar
function change(){

    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt( document.getElementById("height").value);
   

    let vke;
    let result = document.getElementById("result");
    let category = document.getElementById("category");
    vke = (weight / Math.pow((height/100),2)).toFixed();
    result.textContent = vke;

    if(vke <= 18){
        category.textContent = "Zayıf";
         category.style.color = "red";
    }
    else if(vke > 18 && vke < 25){
        category.textContent = "Normal Kilolu";
      
        category.style.color = "red";
    }
    else if(vke >= 25 && vke < 30){
        category.textContent = "Fazla Kilolu";
       
        category.style.color = "red";
    }
    else if(vke >= 30 && vke < 35){
        category.textContent ="1.Derece Obezite";
        
        category.style.color = "red";
    }
    else if(vke >=35 && vke < 40){
    category.textContent = "2.Derece Obezite";
    
    
    category.style.color = "red";
    }
    else{
        category.textContent = "3.Derece Obezite";
        category.style.color = "red";
    }


}


