// example one
let salam: (a:string,b:string)=>void;
salam = (name:string,salamkrdn:string)=>{
    console.log(`${name} says ${salamkrdn}`);  // number + salamkrdn
}

// example tow

let calc:(a:number,n:number,c:string) => number;

calc = (numOne:number,numTwo:number,action:string)=>{
    if(action === "add"){
        return numOne + numTwo
    }else{
        return numOne - numTwo;
    }
}

// example three
let logDetail : (obj:{name:string,age:number})=> void;

type person ={name:string,age:number};

logDetail=(barbarosa:person)=>{
    console.log(`${barbarosa.name} is ${barbarosa.age} years old`);
}
