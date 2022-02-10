console.log("This first line of java scipt on external file");

// to avoid repetation we use FUNCTION
// let name="Niko";
// let name1="Bittu";
// let name2="Bhai";
// let name3="Pira";
// console.log(name+" Is a bed Boy");
// console.log(name1+" Is a good Boy");
// console.log(name2+" Is a avg Boy");
// console.log(name3+" Is a konhe ye Boy");

// function value(name){
//     console.log(name+"is a good boy");
// }
// let name="Niko";
// let name1="Bittu";
// let name2="Bhai";
// let name3="Pira";
// value(name);
// value(name1);
// value(name2);
// value(name3);

function sum(a,b,c){
    let d=a+b+c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}

let sumOfFunction=sum(2,8,6);
console.log(sumOfFunction)

function value(name,text="good Moring to all"){
    console.log(text+" "+name);
    console.log(name+" is a good boy");
}
let name="Niko";
let name1="Bittu";
let name2="Bhai";
let name3="Pira";
let text="Good morning";
value(name,text);
value(name1,text);
value(name2,text);
let knowname=value(name3);
console.log(knowname)

