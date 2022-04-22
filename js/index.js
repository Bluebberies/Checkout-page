function validateForm() {
    alert('Successful Submission!😎');
}
// // var first = 54.99;
// // var shipping = 19.00;
// // var subincrement;
// // var subdecrement;
// // var subincrease;
// // var subdecrease;

// // var total = first + second + shipping

// // function myFunction(){
// //    for(var i=0; i<=100; i++) {
// //     document.getElementById('num1') = i;
// //     console.log(i);
// //    }
// // }
// // myFunction

// // var x = document.getElementById("myTotal");
// // // x.innerHTML = '$' + total + increment()

// // var vintage = document.getElementById('num1');

// // var levi = document.getElementById('num2');
// // // console.log(vintage.stepUp())




// // function increment(){
// //     vintage.stepUp();
// //     if(vintage.value > 0){
// //         subincrement = ((first * vintage.value) + shipping).toFixed(2);
// //     }else{
// //         subincrement = 0;
// //     }
// //     x.innerHTML  = subincrement

  
// //     // x.innerHTML.toFixed(2);
// // }

// // console.log(x.innerHTML)

// // function decrement(){
// //     vintage.stepDown();
// //     if(vintage.value > 0){
// //         subdecrement = ((first * vintage.value) + shipping).toFixed(2);
// //     }else{
// //         subdecrement = 0
// //     }
// //     x.innerHTML  = subdecrement
// //     // console.log(vintage.value)
    
// // }

// // function increase(){
// //     levi.stepUp();
// //     if(levi.value > 0){
// //         subincrease = ((second * levi.value) + shipping).toFixed(2);
// //     }else{
// //         subincrease = 0
// //     }
// //     x.innerHTML  = subincrease
// // }

// // function decrease(){
// //     levi.stepDown();
// //     if(levi.value > 0){
// //         subdecrease = ((second * levi.value) + shipping).toFixed(2);
// //     }else{
// //         subdecrease = 0
// //     }
// //     x.innerHTML  = subdecrease
// // }

// // // increment().value;
// var second = 74.99;
// // var april = (document.getElementById('num2').value * second);
// // var june = (document.getElementById('num1').value * first);
// // var july = (document.getElementById('num1').value * first);

// // var total = may + april + june + july;

// function myFunction(){
//     p = document.getElementById('num2').value * second;

   

//     // console.log(document.getElementById('num2').value * second)

// }
//  console.log(p)
// var y = document.getElementById('levelButton');
// y.addEventListener('click', myFunction)

document.querySelector('#minus').addEventListener('click', minus1key)
document.querySelector('#plus').addEventListener('click', plus1Key)
document.querySelector('#minus-2').addEventListener('click', minus2Key)
document.querySelector('#plus-2').addEventListener('click', plus2Key)

const orderNumber = document.querySelector('#order-no-1')
const orderNumber2 = document.querySelector('#order-no-2')
const totalValue = document.querySelector('#myTotal')

// initial vlues of the order
let order = 0
let order2 = 0
const shippingFee = 19

// container for products 1 and product 2 price
let arr = [0, 0]

// price declaration
let productOnePrice = 54.99
let productTwoPrice = 74.99

// the first product plus function
function plus1Key(){
    order += 1
    let totalPrice = order * productOnePrice
    arr[0] = totalPrice
    let finalAnswer = arr[0] + arr[1] +shippingFee
    orderNumber.innerText = order
    totalValue.innerText = finalAnswer.toFixed(2)
}

// the first product minus function
function minus1key(){
    // this is to ensure the least order to make is 1
    if(order !== 0){
        order -= 1
        console.log(order)
        let totalPrice = order * productOnePrice
        orderNumber.innerText = order
        arr[0] = totalPrice
        let finalAnswer = arr[0] + arr[1] +shippingFee
        totalValue.innerText = finalAnswer.toFixed(2)

    } else{
        orderNumber.innerText = 0
    }
   
}

// the second product plus function
function plus2Key(){
    order2 += 1
    let totalPrice = order2 * productTwoPrice
    arr[1] = totalPrice
    let finalAnswer = arr[0] + arr[1] + shippingFee
    orderNumber2.innerText = order2
    totalValue.innerText = finalAnswer.toFixed(2)
}

// the second product minus function
function minus2Key(){
    if(order2 !== 0){
        order2 -= 1
        console.log(order2)
        let totalPrice = order2 * productTwoPrice
        arr[1] = totalPrice
        let finalAnswer = arr[0] + arr[1] + shippingFee
        totalValue.innerText = finalAnswer.toFixed(2)
        orderNumber2.innerText = order2
    } else{
        orderNumber2.innerText = 0
    }
    
}


