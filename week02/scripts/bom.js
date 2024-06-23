const input =document.querySelector("#favchap");
const button =document.querySelector("button");
const list =document.querySelector("ul");

const li = document.createElement('li');

const delateButton = document.createElement("button");
li.textContent= input.value;

delateButton.textContent("❌");
li.appendChild(delateButton);
list.append(li);