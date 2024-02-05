function soma() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
   
    var result = num1 + num2;
    document.getElementById("resultadosoma").textContent = result;
    console.log(result)
   }

   function sub() {
    var num1 = document.getElementById("num3").valueAsNumber;
    var num2 = document.getElementById("num4").valueAsNumber;
   
    var result = num1 - num2;
    document.getElementById("resultadosub").textContent = result;
    console.log(result)
   }

   function div() {
    var num1 = document.getElementById("num5").valueAsNumber;
    var num2 = document.getElementById("num6").valueAsNumber;
   
    var result = num1 / num2;
    document.getElementById("resultadodiv").textContent = result;
    console.log(result)
   }

   function mult() {
    var num1 = document.getElementById("num7").valueAsNumber;
    var num2 = document.getElementById("num8").valueAsNumber;
   
    var result = num1 * num2;
    document.getElementById("resultadomult").textContent = result;
    console.log(result)
   }