//single line comment
let d=1;
/*
multiline comment
*/

var allratings=[];

function myfun(){
    var val1= document.getElementById("val1").value;
    var val2= document.getElementById("val2").value;

    var obj={
        name:val1,
        rating:val2
    };
    
    // console.log(obj);
    allratings.push(obj);
    console.log(allratings);
}