window.onload = () =>{

    const numero1 = document.querySelector(".numero1");
    const numero2 = document.querySelector(".numero2");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");
    
    const buttonSuma = document.querySelector(".suma");
    const buttonResta = document.querySelector(".resta");
    const buttonMultiplicacion = document.querySelector(".multiplicacion");
    const buttonDivision = document.querySelector(".division");
    const buttonReset = document.querySelector(".reset");
    
    function reset(){
        numero1.value = "";
        numero2.value = "";
        h2.innerHTML = "Result"
    }
    
    const body = document.querySelector("body");
    
    function calcular(color,operador) {
        body.className = color;
        p.innerHTML = operador;
        if(operador == "+"){
            h2.innerHTML = +numero1.value + +numero2.value; 
        }
        if(operador == "-"){
            h2.innerHTML = +numero1.value - +numero2.value; 
        }
        if(operador == "*"){
            h2.innerHTML = +numero1.value * +numero2.value; 
        }
        if(operador == "/"){
            h2.innerHTML = +numero1.value / +numero2.value; 
        }
    }

    buttonSuma.addEventListener("click", () => calcular("red","+"));
    buttonResta.addEventListener("click", () => calcular("green","-"));
    buttonMultiplicacion.addEventListener("click",() => calcular("yellow","*"));
    buttonDivision.addEventListener("click",() => calcular("blue","/"));
    buttonReset.addEventListener("click", ()=> reset());

};
