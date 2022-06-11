import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // -------------------------------------
  // Compose todo item
  // -------------------------------------
  // container
  const div = document.createElement("div");
  div.className = "list-row";
  // todo label
  const li = document.createElement("li");
  li.innerText = inputText;
  // complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "complete";
  completeBtn.addEventListener("click", () => {
    alert("complete");
  });

  // remove button
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  removeBtn.addEventListener("click", () => {
    alert("remove");
  });

  // compose div(list-row)
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(removeBtn);

  // add to todo-list
  document.getElementById("todo-list").appendChild(div);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
