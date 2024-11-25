//tapsyrma 1
/* function isa(){
    while(true){
    let san1 = +prompt("1 shy san")
    let san2 = +prompt("2 shy san")
    let aiyrma = prompt("aiyrma jaz; +, -, /, *")
    if(aiyrma == "+"){
        alert(san1 + san2)
    }else if(aiyrma == "-"){
        alert(san1 - san2)
    }else if(aiyrma == "*"){
        alert(san1 * san2)
    }else if(aiyrma == "/"){
        alert(san1 / san2)
    }else if(san1 == ""){
        alert("kate")
    }else{
        alert("kate")
    }
    }
}
isa(); */

//Tapsyrma 3
// function sanTap() {
//     let a = 35;
    
//     while (true) {
//         let san = +prompt("1den 100ge deiyn san jaz ");
        
//         if (san == a) {
//             alert(`Sandi taptyniz! Maklades, sizdin san ${a}`);
//             break;
//         }
        
//         if (san < 1 || san > 100) {
//             alert("Kate tedyn");
//         } else if (san < a) {
//             if (a - san <= 5) {
//                 alert("sal jogary");
//             } else {
//                 alert("tomen");
//             }
//         } else if (san > a) {
//             if (san - a <= 5) {
//                 alert("sal tomen");
//             } else {
//                 alert("jogary");
//             }
//         }
//     }
// }

// sanTap();

//Tapsyma 2
function skidka (){
let price = parseFloat(prompt("Заттың бағасын енгізіңіз:"));
let quantity = parseInt(prompt("Қанша зат сатып алғыңыз келеді?"));


let totalCost = price * quantity;

let discount = 0;

if (totalCost > 20000) {
    discount = 0.3; 
} else if (totalCost > 10000) {
    discount = 0.2; 
} else if (totalCost > 5000) {
    discount = 0.1; 
}
let discountAmount = totalCost * discount;
let finalAmount = totalCost - discountAmount;


alert(`jalpy kunu: ${totalCost.toFixed(2)} tenge
jenildik: ${discountAmount.toFixed(2)} tenge
: ${finalAmount.toFixed(2)} tenge`);
}
skidka();