"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details} `;
    }
}
const invOne = new Invoice('barbarosa', "work on the marion website", 250);
const invTow = new Invoice('lawand', "work on the marion website", 150);
let invoices = [];
invoices.push(invOne);
invoices.push(invTow);
console.log(invoices);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
