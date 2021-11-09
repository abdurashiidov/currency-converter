var btn = document.getElementById("btn");
var input = document.getElementById("input");
var result = document.getElementById("result");
var kirish = document.querySelector(".kirish")
var chiqish = document.querySelector(".chiqish")
var javob = document.querySelector(".return")
var dollar = 10700
var euro = 12400
var rubl = 150.64
var sum = 1000
function valute(krish, chiq){
    if(krish == "sum" && chiq == "euro"){
        return input.value * euro
    }
    else if(krish == "sum" && chiq == "dollar"){
        return input.value * dollar
    }
    else if(krish == "sum" && chiq == "rubl"){
        return input.value * rubl 
    }


    if(krish == "euro" && chiq == "sum"){
        return input.value * sum
    }
    else if(krish == "euro" && chiq == "dollar"){
        return input.value / dollar
    }
    else if(krish == "euro" && chiq == "rubl"){
        return input.value / rubl
    }


    if(krish == "rubl" && chiq == "sum"){
        return input.value * sum
    }
    else if(krish == "rubl" && chiq == "dollar"){
        return input.value / dollar
    }
    else if(krish == "rubl" && chiq == "euro"){
        return input.value / euro
    }


    return 10
}
btn.addEventListener("click", (e) => {
    var krv = kirish.value
    var chiqv = chiqish.value
  
    javob.textContent =  valute(krv, chiqv)
})
