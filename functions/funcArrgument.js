// Accept other function as arrgument
function doTwice(func){
    console.log('first Number:')
    func();
    console.log('second Number:')
     func();
}
function rollDice(roll){
 roll = Math.floor(Math.random() *6)+1;
 console.log(roll);
}
doTwice(rollDice);