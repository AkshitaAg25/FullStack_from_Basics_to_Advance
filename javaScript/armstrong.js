function checkAndShow(){
    let a=document.getElementById(val1);
    var count=0;
    let b=a; let check=a;
    while(a>0){
        count++;
        a=Math.floor(a/10);
    }
    // console.log(b);
    let sum=0;
    while(b>0){
        sum+=(Math.floor(b%10) ** count);
        b=Math.floor(b/10);
    }
    // console.log(sum);
    if(sum==check){
        console.log("The number is Armstrong Number");
    }else{
        console.log("It is not an armstrong number");
    }
}