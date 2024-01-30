// let name="shiva"
// let age=19
// let isMarried =false

// console.log("this person name is " + name + " and their age is "+age);

// if(isMarried ==true){
//             console.log(name + " is married");
// }

// if(isMarried == false){
//             console.log(name + " is not married");
// }



// let answer =1+2+3+4+5+6;

// console.log(answer);

// let ans=0;

// for (let i = 0; i <=100; i++) {
//            ans=ans+i;
            
// }
// console.log(ans);



// const age=[21,22,23,24,26,100]
// const numberOfPeople =age.length

// for(let i=0;i<numberOfPeople;i++)
// {
//             if(age[i] %2 ==0){
//                         console.log(age[i]);
//             }
// }


//objects
/*
const allUsers =[{
            firstName : "shiva",
            gender :"male"
},{
            firstName : "Raman",
            gender :"male"
},{
            firstName:"priya",
            gender:"female"
}]
for(let i=0;i<allUsers.length;i++){
            if(allUsers[i]["gender"]=="male"){
                        console.log(allUsers[i]["firstName"]);
            }
}
*/

//function

// function sum(a,b){
//             const sumValue =a+b;
//             return sumValue;
// }

// const value =sum(1,2)
// const value2 =sum(1,10)
// console.log(value);
// console.log(value2);


// function sum(num1,num2,fnToCall){
//             let result =num1+num2
//             fnToCall(result)
// }

// function displayResult(data){
//             console.log("Result of the sum is : "+ data);
// }

// function displayResultPassive(data){
//             console.log("Sum's result is :"+data);
// }

// const ans =sum(1,2,displayResult);



// function greet(){
//             console.log("shiva");
// }
// setTimeout(greet,3*1000)

function greet(){
            console.log("shiva");
}
setInterval(greet,3*1000)