import "./styles.css";

const createTodoContainer = (contentText) => {
  // -------------------------------------
  // Compose todo item
  // -------------------------------------
  // container
  const div = document.createElement("div");
  div.className = "list-row";
  // todo label
  const li = document.createElement("li");
  li.innerText = contentText;
  // complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "complete";
  completeBtn.addEventListener("click", () => {
    // remove target
    const completeTarget = completeBtn.parentNode;
    removeFromList(completeTarget, "todo-list");

    // compose done Container
    const todoContent = completeTarget.firstElementChild.innerText;
    const doneContainer = document.createElement("div");
    doneContainer.className = "list-row";
    const doneItem = document.createElement("li");
    doneItem.innerText = todoContent;
    const rebaseBtn = document.createElement("button");
    rebaseBtn.innerText = "rebase";
    rebaseBtn.addEventListener("click", () => {
      // remove target
      const rebaseTarget = rebaseBtn.parentNode;
      removeFromList(rebaseTarget, "done-list");
      // add target to todo-list
      const rebaseContent = rebaseTarget.firstElementChild.innerText;
      const rebaseContainer = createTodoContainer(rebaseContent);
      document.getElementById("todo-list").appendChild(rebaseContainer);
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
    removeFromList(removeTarget, "todo-list");
  });

  // compose div(list-row)
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(removeBtn);

  return div;
};

const removeFromList = (targetItem, listId) => {
  document.getElementById(listId).removeChild(targetItem);
};

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // -------------------------------------
  // Compose todo item
  // -------------------------------------
  const todoContainer = createTodoContainer(inputText);

  // add to todo-list
  document.getElementById("todo-list").appendChild(todoContainer);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
