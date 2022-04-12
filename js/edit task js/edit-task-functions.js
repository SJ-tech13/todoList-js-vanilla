            // WHEN ACTIVE LIST ITEM COME FOR EDIT, THIS CODE BE RENDER
const runTodoListCode = (taskFinded) => {
    titleEditEl.value = taskFinded.text
    descriptionEditEl.value = taskFinded.description

    titleEditEl.addEventListener("input", (e) => {
        taskFinded.text = e.target.value 
        saveList(todoListTP)
    })

    descriptionEditEl.addEventListener("input", (e) => {
        taskFinded.description = e.target.value
        saveList(todoListTP)
    })
}

const runDoneTodoListCode = (taskFinded) => {
    titleEditEl.value = taskFinded.text
    descriptionEditEl.value = taskFinded.description

    titleEditEl.addEventListener("input", (e) => {
        taskFinded.text = e.target.value
        saveDoneList(doneTodoListTP)
    })

    descriptionEditEl.addEventListener("input", (e) => {
        taskFinded.description = e.target.value
        saveDoneList(doneTodoListTP)
    })
}

const renderEditTask = (task) => {
    if (task == "active") {
        runTodoListCode(taskFinded)
        console.log("run active list");
    }else if (task !== "active") {
        runDoneTodoListCode(taskFinded)
        console.log("run done list");
    }else {
        alert("not in range!")
        console.log("not in range");
    }
}



            //WHEN DONE LIST ITEM COME FOR EDIT, THIS CODE BE RENDER
const activeDeleteBTN = () => {
    deleteTask(todoListTP, taskFinded.id);
    saveList(todoListTP);
    location.assign("./app.html")
}

const doneDeleteBTN = () => {
    deleteTask(doneTodoListTP, taskFinded.id);
    saveDoneList(doneTodoListTP);
    location.assign("./app.html")
}

const renderDeleteButton = (task) => {
    deleteButton.addEventListener("click", () => {
        if (task == "active") {
            activeDeleteBTN()
            console.log("run active list");
        }else if (task !== "active") {
            doneDeleteBTN()
            console.log("run done list");
        }else {
            alert("not in range!")
            console.log("not in range");
        }
    })
}