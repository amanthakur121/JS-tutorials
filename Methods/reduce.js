const prices = [15, 12 , 14 , 55 , 33 , 99];
 
// By a normal methord
// let total = 0;
// for(let price of prices){
//    total+= price;
// }
// console.log(total)

//By using reduce methord
const totalValue = prices.reduce((total,price)=>{
    return total + price;
})
console.log(`so the total value is ${totalValue}`)