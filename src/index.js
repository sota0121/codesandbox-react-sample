import "./styles.css";

const removeFromToDoList = (target) => {
  document.getElementById("todo-list").removeChild(target);
};

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
    // remove target
    const completeTarget = completeBtn.parentNode;
    removeFromToDoList(completeTarget);

    // compose done item
    const todoContent = completeTarget.firstElementChild.innerText;
    const doneContainer = document.createElement("div");
    doneContainer.className = "list-row";
    const doneItem = document.createElement("li");
    doneItem.innerText = todoContent;
    const rebaseBtn = document.createElement("button");
    rebaseBtn.innerText = "rebase";
    rebaseBtn.addEventListener("click", () => {
      alert("rebase");
    });
    doneContainer.appendChild(doneItem);
    doneContainer.appendChild(rebaseBtn);

    // add target to done-list
    document.getElementById("done-list").appendChild(doneContainer);
  });

  // remove button
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  removeBtn.addEventListener("click", () => {
    // remove the parent node of the remove-btn clicked
    const removeTarget = removeBtn.parentNode;
    removeFromToDoList(removeTarget);
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
