    //RENDER active list function
    const renderTodoList = () => {
        //filter for search input
    const filteredTask = todoList.filter((item) => {
        return item.text.toLowerCase().trim().includes(filterconsole.searchTask.toLowerCase().trim())
    })
        //add task in DOM
    document.querySelector(".active-list-li").innerHTML = "";
    filteredTask.forEach((item) => {
        document.querySelector(".active-list-li").appendChild(createtaskDOM(item))
    })
}
    //create active list dom elements
const createtaskDOM = (item) => {
    const buildLI = document.createElement("li");
    const textTask = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");

    buildLI.setAttribute("id", "build-li")

    if (checkShoudDesc(todoList, "shoud do it", item.description)) textTask.style.color = "red"
    if (checkShoudDesc(todoList, "important", item.description)) textTask.style.color = "red"
    if (checkShoudDesc(todoList, "highlight", item.description)) textTask.style.color = "red"

    textTask.textContent = item.text;
    textTask.setAttribute("id", "text-task")
    textTask.setAttribute("title", item.description)
    textTask.addEventListener("click", () => {
        location.assign(`./edit-task.html#${item.id}`)
    })
    buildLI.appendChild(textTask);

    deleteButton.textContent = "delete it"
    deleteButton.setAttribute("id", "delete-button")
    deleteButton.setAttribute("title", `delete ${item.text}.`)
    deleteButton.addEventListener("click", () => {
        deleteTask(todoList, item.id)
        saveList(todoList)
        renderTodoList()
        renderDoneTodoList()
    })
    buildLI.appendChild(deleteButton);

    doneButton.textContent = "done it"
    doneButton.setAttribute("id", "done-button")
    doneButton.setAttribute("title", `${item.text} done.`)
    doneButton.addEventListener("click", () => {
        item.existIn = "done"
        addDoneTask(item.id)
        deleteTask(todoList, item.id)
        saveList(todoList)
        saveDoneList(doneTodoList)
        renderTodoList()
    })
    buildLI.appendChild(doneButton);
    return buildLI
}





    //RENDER done list function
const renderDoneTodoList = () => {
        //filter for search input
    const filteredDoneTodoList = doneTodoList.filter((item) => {
        return item.text.toLowerCase().trim().includes(filterconsole.searchTask.toLowerCase().trim())
    })
        //add task in DOM
    document.querySelector(".done-list-li").innerHTML = ""
    filteredDoneTodoList.forEach((item) => {
        document.querySelector(".done-list-li").appendChild(createDoneTaskDOM(item))
    })
}

    //create done list dom elements
const createDoneTaskDOM = (item) => {
    const buildLI = document.createElement("li");
    const textTask = document.createElement("span")
    const deleteButton = document.createElement("button")
    const returnButton = document.createElement("button")

    buildLI.setAttribute("id", "build-li")

    if (checkShoudDesc(todoList, "shoud do it", item.description)) textTask.style.color = "red"
    if (checkShoudDesc(todoList, "important", item.description)) textTask.style.color = "red"
    if (checkShoudDesc(todoList, "highlight", item.description)) textTask.style.color = "red"

    textTask.textContent = item.text;
    textTask.setAttribute("id", "text-task")
    textTask.setAttribute("title", item.description)
    textTask.addEventListener("click", () => {
        location.assign(`./edit-task.html#${item.id}`)
    })
    buildLI.appendChild(textTask);

    deleteButton.textContent = "delete it"
    deleteButton.setAttribute("id", "delete-button")
    deleteButton.setAttribute("title", `delete ${item.text}.`)
    deleteButton.addEventListener("click", () => {
        deleteTask(doneTodoList, item.id)
        saveList(todoList)
        renderTodoList()
        saveDoneList(doneTodoList)
        renderDoneTodoList()
    })
    buildLI.appendChild(deleteButton);

    returnButton.textContent = "return it";
    returnButton.setAttribute("title", `return ${item.text} in active list.`)
    returnButton.setAttribute("id", "retrun-button");
    returnButton.addEventListener("click", () => {
        item.existIn = "active"
        addActiveTask(item.id)
        deleteTask(doneTodoList, item.id)
        saveList(todoList)
        saveDoneList(doneTodoList)
        renderDoneTodoList()
    })



    buildLI.appendChild(returnButton);

    return buildLI
}