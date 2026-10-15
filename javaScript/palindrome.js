function checkPalindrome(a){
    let check=a; 
    let num=0;
    while(a>0){
        num+=a%10;
        num*=10;
        a=Math.floor(a/10);
    }
    if(num/10==check){
        console.log("Is Palindrome");
    }else{
        console.log("Not a palindrome");
    }
}

checkPalindrome(121);