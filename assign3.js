<<<<<<< HEAD
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
];

const filter_states=(states)=>{

    let vowels=['A','E','I','O','U'];
    for(var i=0;i<states.length;i++)
    {
        let firstchar= states[i].charAt(0);
        for(var j =0;j<vowels.length;j++)
        {
            if (firstchar===vowels[j])
            {
                states.splice(i,1);
                i--;
                break;
            }
        }
    }
    return states;

};

//second question
let str = 'I love my India';
const change=(str)=>{
    return  str.split(" ").reverse().join(" ");
};

//third question

let string = 'INDIA';
let string2= "ONESIA";

let arr2=string2.split('');
let arr=string.split("");

arr.splice(3);
let arr3= [...arr,...arr2];

console.log(arr3.join(""));

//fourth question
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let vowels = 'AEIOUaeiou';
let vowels_arr = [];
let cons_arr = [];

const find = (alphabets) => {
    for (var i = 0; i < alphabets.length; i++) {
        if (vowels.includes(alphabets[i])) {
            vowels_arr.push(alphabets[i]);
        } else {
            cons_arr.push(alphabets[i]);
        }
    }
    console.log(vowels_arr.join('')); 
    console.log(cons_arr.join(''));   
};
find(alphabets);


//fifth q
let sen = "HI I IS CHARAN";

const changeit = (sen) => {
    let modifiedSen = sen.replace("IS", "AM"); // Replace "IS" with "AM"
    console.log(modifiedSen);
};

changeit(sen);


//sixth question

// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

const funn = (inputArr) => {
  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (inputArr[i] < 5) {
      inputArr.splice(i, 1);
    }
  }
  console.log(inputArr);
};

funn(inputArr);


//seventh q
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    let total = student.scores.reduce((sum, score) => sum + score, 0); // Sum all scores
    let average = total / student.scores.length; // Calculate average
    return { name: student.name, average: Math.round(average) }; // Round the average
});

console.log(output);

//eight- Write a function to find repeated sum of digits until there is only a single digit in the number.
//Example - 456 - 4+5+6 = 15 - 1+5 = 6.

const single_dig=(num)=>{
    let arr10=num.toString().split('');
    let sum=0;
    for(var i=0;i<arr10.length;i++)
    {
        sum+=Number(arr10[i]);
    }
    if(sum>10)
    {
        return single_dig(sum);
    }
    console.log(sum);
};
single_dig(567)

// Q9) Write a function to count the number of words in a paragraph.



// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


const countit=(para)=>{
    let arr7= para.split(" ");
    console.log(arr7.length);
};


const rev=(str)=>{
    let arr11=[];
    for(var i=str.split('').length-1;i>=0;i--)
    {
         arr11.push(str.split('')[i]);
    }
    arr11.join('');
    console.log(arr11)
  };
  
  rev("CHARAN");


  //11th
  
  const students_1= [
    {
        name: "student1",
        scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        name: "student2",
        scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        name: "student3",
        scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

const result = students.map(student => {
    const scores = Object.values(student.scores);
    const average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    return { [student.name]: { average } };
});

console.log(result);

=======
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
];

const filter_states=(states)=>{

    let vowels=['A','E','I','O','U'];
    for(var i=0;i<states.length;i++)
    {
        let firstchar= states[i].charAt(0);
        for(var j =0;j<vowels.length;j++)
        {
            if (firstchar===vowels[j])
            {
                states.splice(i,1);
                i--;
                break;
            }
        }
    }
    return states;

};

//second question
let str = 'I love my India';
const change=(str)=>{
    return  str.split(" ").reverse().join(" ");
};

//third question

let string = 'INDIA';
let string2= "ONESIA";

let arr2=string2.split('');
let arr=string.split("");

arr.splice(3);
let arr3= [...arr,...arr2];

console.log(arr3.join(""));

//fourth question
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let vowels = 'AEIOUaeiou';
let vowels_arr = [];
let cons_arr = [];

const find = (alphabets) => {
    for (var i = 0; i < alphabets.length; i++) {
        if (vowels.includes(alphabets[i])) {
            vowels_arr.push(alphabets[i]);
        } else {
            cons_arr.push(alphabets[i]);
        }
    }
    console.log(vowels_arr.join('')); 
    console.log(cons_arr.join(''));   
};
find(alphabets);


//fifth q
let sen = "HI I IS CHARAN";

const changeit = (sen) => {
    let modifiedSen = sen.replace("IS", "AM"); // Replace "IS" with "AM"
    console.log(modifiedSen);
};

changeit(sen);


//sixth question

// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

const funn = (inputArr) => {
  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (inputArr[i] < 5) {
      inputArr.splice(i, 1);
    }
  }
  console.log(inputArr);
};

funn(inputArr);


//seventh q
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    let total = student.scores.reduce((sum, score) => sum + score, 0); // Sum all scores
    let average = total / student.scores.length; // Calculate average
    return { name: student.name, average: Math.round(average) }; // Round the average
});

console.log(output);

//eight- Write a function to find repeated sum of digits until there is only a single digit in the number.
//Example - 456 - 4+5+6 = 15 - 1+5 = 6.

const single_dig=(num)=>{
    let arr10=num.toString().split('');
    let sum=0;
    for(var i=0;i<arr10.length;i++)
    {
        sum+=Number(arr10[i]);
    }
    if(sum>10)
    {
        return single_dig(sum);
    }
    console.log(sum);
};
single_dig(567)

// Q9) Write a function to count the number of words in a paragraph.



// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


const countit=(para)=>{
    let arr7= para.split(" ");
    console.log(arr7.length);
};


const rev=(str)=>{
    let arr11=[];
    for(var i=str.split('').length-1;i>=0;i--)
    {
         arr11.push(str.split('')[i]);
    }
    arr11.join('');
    console.log(arr11)
  };
  
  rev("CHARAN");


  //11th
  
  const students_1= [
    {
        name: "student1",
        scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        name: "student2",
        scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        name: "student3",
        scores: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

const result = students.map(student => {
    const scores = Object.values(student.scores);
    const average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    return { [student.name]: { average } };
});

console.log(result);

>>>>>>> caee9e8 (Initial commit)
  