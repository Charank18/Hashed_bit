<<<<<<< HEAD
//1st question
const even =()=>{
 for(var i=0;i<101;i++)
 {
    if(i%2===0)
    {
    console.log(i);
    }
 }
};

//2nd question
const fun= (input, a, b)=>{

    switch(input)
    {
        case "add":
            return a+b;
        case "subtract":
            return a-b;
        case "division":
            return a%b;
        case "multiplication":
            return a
        default:
            return "invalid";
    }
};

//3rd question
const tax=(salary)=>{
    var tax=0;
    switch(true)
    {
        case ( salary<500000):
            tax=0;
            break;
        case ( 500000<salary && salary<=1000000 ):
            tax=0.01*salary;
            break;
        case (1000000< salary && salary<=1500000):
            tax=0.02* salary;
            break;
        case (salary>1500000):
            tax=0.03*salary;
            break;
    }
    return tax;
}

//4th question
const sumOfProducts = (n1, n2) => {
    let str1 = n1.toString().split("").reverse();
    let str2 = n2.toString().split("").reverse();
    let minLen = Math.min(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < minLen; i++) {
        sum += str1[i] * str2[i];
    }

    return sum;
=======
//1st question
const even =()=>{
 for(var i=0;i<101;i++)
 {
    if(i%2===0)
    {
    console.log(i);
    }
 }
};

//2nd question
const fun= (input, a, b)=>{

    switch(input)
    {
        case "add":
            return a+b;
        case "subtract":
            return a-b;
        case "division":
            return a%b;
        case "multiplication":
            return a
        default:
            return "invalid";
    }
};

//3rd question
const tax=(salary)=>{
    var tax=0;
    switch(true)
    {
        case ( salary<500000):
            tax=0;
            break;
        case ( 500000<salary && salary<=1000000 ):
            tax=0.01*salary;
            break;
        case (1000000< salary && salary<=1500000):
            tax=0.02* salary;
            break;
        case (salary>1500000):
            tax=0.03*salary;
            break;
    }
    return tax;
}

//4th question
const sumOfProducts = (n1, n2) => {
    let str1 = n1.toString().split("").reverse();
    let str2 = n2.toString().split("").reverse();
    let minLen = Math.min(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < minLen; i++) {
        sum += str1[i] * str2[i];
    }

    return sum;
>>>>>>> caee9e8 (Initial commit)
};