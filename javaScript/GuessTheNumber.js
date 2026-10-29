
function guess(){
    let min=1;
    let max=6;
    let random = Math.floor(Math.random() * (max-min)+min);
    console.log(random);
    let user=document.getElementById("usernumb").value;
    console.log(user);
    let result='';
    if(random==user){
        console.log("You Guessed it right!")
        result="You Guessed it right!";
    }else{
        console.log("Better luck next time.")
        result="Better luck next time.";
    }
    document.getElementById('result').textContent = result;
}
