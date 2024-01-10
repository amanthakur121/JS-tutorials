function mystery(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("Congrats i am a good number ");
            console.log("You won a million dollors");
        }
        } else {
            return function(){
                alert("You have been infective by a Computer virus");
                alert("Stor trying to close this window");
                alert("Stor trying to close this window");
                alert("Stor trying to close this window");
                alert("Stor trying to close this window");

            }
        }
    }
  