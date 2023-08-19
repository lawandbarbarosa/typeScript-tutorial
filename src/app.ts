// classes
class Invoice{
    client:string ;
    details:string;
    amount:number;
    constructor(c:string,d:string,a:number){
        this.client= c;
        this.details = d;
        this.amount  = a;
    }
    format(){
        return `${this.client} owes ${this.amount} for ${this.details} `
    }
}

const invOne = new Invoice('barbarosa',"work on the marion website",250)
const invTow= new Invoice('lawand',"work on the marion website",150)


let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTow);

console.log(invoices)

const form = document.querySelector(".new-item-form")! as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber
    )
})

