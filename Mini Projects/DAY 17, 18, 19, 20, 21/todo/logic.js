console.log("Project: TODO");


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;

    if (task.trim() === "") return;

    const li = document.createElement("li");

    li.innerText = task;

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.style.marginLeft = "5px";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

function filterTasks() {
  const taskList = document.getElementById("taskList");
  const searchInput = document.getElementById("searchInput");

  const searchValue = searchInput.value.toLowerCase();

  const tasks = taskList.querySelectorAll("li");

  tasks.forEach(function (li) {
    const taskName = li.firstChild.textContent.toLowerCase();

    if (taskName.includes(searchValue)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}

function debounce(callback, wait) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback();
    }, wait);
  };
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", debounce(filterTasks, 500));
