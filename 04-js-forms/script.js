var ToDoList = [];


function fillTasks() 
{
    let taskHolderHigh = document.getElementById("tasks-high-priority");
    let taskHolderLow = document.getElementById("tasks-low-priority");

    taskHolderHigh.innerHTML = "";
    taskHolderLow.innerHTML = "";
    for (let i = 0; i < ToDoList.length; i++) 
    {
        let newTask = createTask(ToDoList[i]);
        if (ToDoList[i].priority == "High_Priority") 
        {
            taskHolderHigh.innerHTML += newTask;
        }
        else 
        {
            taskHolderLow.innerHTML += newTask;
        }
    }
}

function createTask(taskInfo) 
{
    date = formatDate(taskInfo.date);

    return `
        <div class="task" style="background-color:${taskInfo.color}">
            <p class="task-label"><b>${taskInfo.label}</b></p>
            <div class="date-info">Due: ${date}</div>
            <p class="discription">${taskInfo.discription}</p>
        </div>`;
    
}

function formatDate(date) 
{
    console.log("date string: " + date)
    let dateString = JSON.stringify(date);

    monthNum = dateString.substring(6, 8);
    year = dateString.substring(1, 5);
    dayNum = dateString.substring(9, 11);
    hour = parseInt(dateString.substring(12, 14));
    minute = parseInt(dateString.substring(15, 17));

    if (hour > 12) 
    {
        hour = hour - 12;
        return monthNum + "/" + dayNum + "/" + year + ", " + hour + ":" + minute + " PM";
    }
    else 
    {
        return monthNum + "/" + dayNum + "/" + year + ", " + hour + ":" + minute + " AM";
    }
    
}

let inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", addTask);

function addTask(e) 
{
    e.preventDefault();

    let labelInput = document.getElementById("title-input").value;
    let dateInput = document.getElementById("date-input").value;
    let colorInput = document.getElementById("background-choice").value;
    let discriptionInput = document.getElementById("discription-input").value;
    var priorityInput;

    let radioOptions = document.getElementsByName("priority-question");
    for (let i = 0; i < radioOptions.length; i++) 
    {
        if (radioOptions[i].checked) 
        {
            priorityInput = radioOptions[i].value;
        }
    }

    let newTask = 
    {
        label:labelInput,
        date:dateInput,
        priority:priorityInput,
        color:colorInput,
        discription:discriptionInput
    }

    ToDoList.push(newTask);

    fillTasks();
}

/*function addTask(name, date, priority, color) 
{
    newTask = document.createElement("div");
    newTask.className = "task";
    newTask.style.backgroundColor = color;

    taskLabel = document.createElement("p");
    taskLabel.className = "task-label";
    taskLabel.innerHTML = name;
    newTask.append(taskLabel);

    newTask.append(createDate(date));

    newTask.innerHTML = "";
    
    taskHolder.append(newTask);
}

function createDate(date) 
{
    

    dateContainer = document.createElement("p");
    dateContainer.className = "date-info";

   

    dateContainer.innerHTML = 
    
    return dateContainer;
}
*/