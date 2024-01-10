function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(2));
    }catch(e){
        console.log("Please pass a String next time!!")
    }
}