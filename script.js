function add(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)+parseInt(num2);
    console.log(result);
   let resultelement= document.getElementById("result");
   resultelement.innerHTML=result;
}

function subtract(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)-parseInt(num2);
    console.log(result);
   let resultelement= document.getElementById("result");
   resultelement.innerHTML=result;
    
}

function multiplication(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)*parseInt(num2);
    console.log(result);
   let resultelement= document.getElementById("result");
   resultelement.innerHTML=result;
}

function division(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)/parseInt(num2);
    console.log(result);
   let resultelement= document.getElementById("result");
   resultelement.innerHTML=result;
}