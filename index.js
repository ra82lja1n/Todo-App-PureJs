// Step -1 select the form and add submit event

// method -1
// let todoArr;

// if (localStorage.getItem("todo") == null) {
//   todoArr = [];
// } else {
//   todoArr = JSON.parse(localStorage.getItem("todo"));
// }

// Method -2
let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("fav")) || [];

displayTable(todoArr);


// step -2 catch value from form tag and called displayTable fn

document.querySelector("form").addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();

  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;

  // console.log(taskName, taskPriority);

  let taskObj = {
    taskName,
    taskPriority,
  };

  todoArr.push(taskObj);

  localStorage.setItem("todo", JSON.stringify(todoArr));
  console.log(todoArr);

  displayTable(todoArr);
}

// step -3 create a table

function displayTable(arr) {
  document.querySelector("tbody").innerText = "";
  arr.forEach((el) => {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.taskName;

    let td2 = document.createElement("td");
    td2.innerText = el.taskPriority;

    let td3 = document.createElement("button");
    td3.innerText = "Add To Fav";

    td3.addEventListener("click", function () {
      favArr.push(el);

      localStorage.setItem("fav", JSON.stringify(favArr));
    });

    row.append(td1, td2, td3);

    document.querySelector("tbody").append(row);  
  });
}
