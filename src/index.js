import { createStore } from 'redux'

const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => console.log("Deposit 5");
deposit25.onclick = () => console.log("Deposit 25");
withdraw5.onclick = () => console.log("Withdraw 5");
withdraw25.onclick = () => console.log("Withdraw 25");


const reducer = (state = {balance: 0}, action) => {
  return state
}

const store= createStore(reducer)

store.subscribe(() => {
  console.log('The store state changed. Here is the new State:', store.getState())
})
