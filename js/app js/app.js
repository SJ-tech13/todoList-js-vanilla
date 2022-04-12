    //active todo list
let todoList = getSaveList()

    //done todo list
let doneTodoList = getSaveDoneList()

    //search input filter
const filterconsole = {
    searchTask: ""
}

renderTodoList()
renderDoneTodoList()

    //search input control
document.querySelector(".search-input").addEventListener("input", (e) => {
    filterconsole.searchTask = e.target.value;
    renderTodoList()
    renderDoneTodoList()
})

    //add task in active todo
document.querySelector(".add-task").addEventListener("submit", (e) => {
    e.preventDefault()
    let text = e.target.elements.addTaskInput.value;
    let description = prompt("please enter description for your task...")
    const id = uuidv4()
    if (text.trim().length == 0) return
    if (!description) {
        if (description.trim() == "") description = "No Description Yet...";
        else return }
    if (checkSameTask(todoList, text) == -1) {
        todoList.push({
            text:text,
            description:description,
            id:id,
            existIn: "active",
        })
    }else {
        alert("please don't same task in input...")
        e.target.elements.addTaskInput.value = ""
        return
    }

    saveList(todoList)

    e.target.elements.addTaskInput.value = ""
    description = ""
    renderTodoList()
})

    //delete add lists control
document.querySelector(".left-delete-button").addEventListener("click", () => {deleteAllTasks()})
document.querySelector(".right-delete-button").addEventListener("click", () => {deleteAllDoneTasks()})
