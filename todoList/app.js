let input = prompt("what would you like to do?")
const todos = [ 'Doremon','Shinchan'];
while(input !== "quit"){
    
    if(input=="list"){
        console.log('**********');
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    }else if(input == "new"){
        const newtodo= prompt("OK, what you want to add");
        todos.push(newtodo);
        console.log(`${newtodo} added to list`)
        
    } else if(input == "delete"){
        console.log("What you want to delete");
        const index = parseInt(prompt("Enter the Index you want to DELETE:"));
        if(!Number.isNaN(index)){
        const deleted = todos.splice(index,1);
        console.log(`OK deleted ${deleted[0]}`)
        }else{
            console.log("Unknown number")
        }
        
    }
    input = prompt("what would you like to do?")
}
console.log("Ok Quit the APP!!")