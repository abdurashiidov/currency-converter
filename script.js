var btn = document.getElementById("btn");
var input = document.getElementById("input");
var result = document.getElementById("result");
let kirish = document.querySelector(".kirish")
let chiqish = document.querySelector(".chiqish")
let javob = document.querySelector(".return")
let dollar = 10700
let euro = 12400
let rubl = 150.64
let sum = 1000
function valute(krish, chiq){
    if(krish == "sum" && chiq == "euro"){
        return input.value * euro
    }
    else if(krish == "sum" && chiq == "dollar"){
        return input.value * dollar
    }
    else if(krish == "sum" && chiq == "rubl"){
        return  rubl * input.value
    }
    if(krish == "euro" && chiq == "sum"){
        return input.value * euro
    }
    else if(krish == "euro" && chiq == "dollar"){
        return input.value / dollar
    }
    else if(krish == "euro" && chiq == "rubl"){
        return input.value / rubl
    }

    if(krish == "rubl" && chiq == "sum"){
        return input.value * euro
    }
    else if(krish == "rubl" && chiq == "dollar"){
        return input.value / dollar
    }
    else if(krish == "rubl" && chiq == "euro"){
        return input.value / rubl
    }


    return 10
}
btn.addEventListener("click", (e) => {
    let krv = kirish.value
    let chiqv = chiqish.value
  
    javob.textContent =  valute(krv, chiqv)
})


// var dollars = 1700
// var rubls = 2300
// var euros = 1200
// button.addEventListener("click", () => {
// let select = document.querySelector(".form-select")
//     let value = select.value
//     if (value == "euro"){
//         console.log('ok'); 
//         sum * euros
//         heading.textContent = sum.value*euros
//     }
//     else if  (value == "rubl"){
//         sum * rubls
//         heading.textContent = sum.value*rubls
//     }
//     else if  (value == "dollar"){
//         sum * dollars
//         heading.textContent = sum.value*dollars
//     }
// })