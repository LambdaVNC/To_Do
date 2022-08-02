let gorevListesi = [
  { id: "1", gorevAdi: "Görev 1" },
  { id: "2", gorevAdi: "Görev 2" },
  { id: "3", gorevAdi: "Görev 3 " },
  { id: "4", gorevAdi: "Görev 4" },
];

displayTasks();

function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  for (let index of gorevListesi) {
    let li = `
                      <li class="task list-group-item">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="${index.id}" />
                          <label for="${index.id}" class="form-check-label">${index.gorevAdi}</label>
                        </div>
                      </li>
      
      `;

    ul.insertAdjacentHTML("beforeend", li);
  }
}

let btnEkle = document.querySelector("#addAddNewTask");

btnEkle.addEventListener("click", newTask);

document.querySelector("#btnClear").addEventListener("click", function (event) {
  console.log("Event : Clear Button!!");
  event.preventDefault();
});

function newTask(event) {
  let taskInput = document.querySelector("#txtTaskName");

  if(taskInput.value==""){
    alert("Boş Görev Girdiniz!");
  }else {
    gorevListesi.push({ id: gorevListesi.length + 1, gorevAdi: taskInput.value });
    displayTasks();
    event.preventDefault();
  }
  
}

let btnClear = document.getElementById("btnClear");

btnClear.addEventListener("click",clearTask);

function clearTask(){
    document.getElementById("task-list").children[0].remove();;
    
}