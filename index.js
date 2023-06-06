const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const inputList = document.querySelector("input");
const toDoLista = document.querySelector(".lista");

let boxCosaDaFare = " ";
let cosaDaFare = " ";

addBtn.addEventListener("click", function () {
  boxCosaDaFare = document.createElement("div");
  toDoLista.appendChild(boxCosaDaFare);
  boxCosaDaFare.classList.add("box--lista");

  cosaDaFare = document.createElement("span");
  boxCosaDaFare.appendChild(cosaDaFare);
  boxCosaDaFare.textContent = inputList.value;

  if (inputList.value !== " ") inputList.value = " ";
});

removeBtn.addEventListener("click", function () {
  toDoLista.removeChild(toDoLista.lastChild);
});
