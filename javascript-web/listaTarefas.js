(() => {
  const button = document.querySelector("[data-form-button]");

  const createCompleteButton = () => {
    const completeButton = document.createElement("button");
    completeButton.classList.add("check-button");
    completeButton.innerText = "complete";
    completeButton.addEventListener("click", completeTask);
    return completeButton;
  };

  const addTask = (event) => {
    event.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);

    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `<p class="content">${input.value}</p>`;
    list.appendChild(task);
    task.appendChild(createCompleteButton());
    task.appendChild(createDeleteButton());

    input.value = "";
  };

  const completeTask = (event) => {
    const completeButton = event.target;
    const toBeCompletedTask = completeButton.parentElement;
    toBeCompletedTask.classList.toggle("done");
  };

  const deleteTask = (event) => {
    const deleteButton = event.target;
    const toBeDeletedTask = deleteButton.parentElement;
    toBeDeletedTask.remove();
  };

  const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", deleteTask);
    return deleteButton;
  };

  button.addEventListener("click", addTask);
})();
