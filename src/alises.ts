type StringOrNum = string | number;


const logDetails = (uuid:StringOrNum,item:string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

const greeting = (user:{name:string,uid:string|number})=>{
   console.log(`${user.name} says salam`)
}