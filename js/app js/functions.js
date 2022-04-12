    //active todo list save control
const getSaveList = () => {
    const listItem = localStorage.getItem("list");
    if (listItem !== null) {
        return JSON.parse(listItem)
    }else {
        return []
    }
}

    //save active task control
const saveList = (list) => {
    return localStorage.setItem("list", JSON.stringify(list))
}

    //done todo list save control
const getSaveDoneList = () => {
    const saveListDoneTask = localStorage.getItem("doneList");
    if (saveListDoneTask !== null) {
        return JSON.parse(saveListDoneTask)
    }else {
        return []
    }
}

    //save done task control
const saveDoneList = (list) => {
    return localStorage.setItem("doneList", JSON.stringify(list))
}

    //delete task function
const deleteTask = (list, id) => {
    const taskFinded = list.findIndex((item) => {
        return item.id == id
    })
    if (taskFinded > -1) {
        list.splice(taskFinded, 1)
    }else {
        return false
    }
}

    //checking save task function
const checkSameTask = (list, text) => {
    const textFinded = list.findIndex((item) => {
        return item.text == text
    })
    return textFinded
}

    //add done task from active task function
const addDoneTask = (id) => {
    const taskFinded = todoList.find((item) => {
        return item.id == id
    })

    if (checkSameTask(doneTodoList, taskFinded.text) == -1) {
        doneTodoList.push(taskFinded)
        renderDoneTodoList()
    }else {
        alert("please don't add same task...")
        return
    }
}

const addActiveTask = (id) => {
    const taskFinded = doneTodoList.find((item) => {
        return item.id == id
    })
    if (checkSameTask(todoList, taskFinded.text) == -1) {
        todoList.push(taskFinded)
        renderTodoList()
    }else {
        alert("please don't add same task...")
        return
    }
}

    //delete all tasks for active list
const deleteAllTasks = () => {
    todoList = []
    saveList(todoList)
    renderTodoList()
}

    //delete all tasks form done list
const deleteAllDoneTasks = () => {
    doneTodoList = []
    saveDoneList(doneTodoList)
    renderDoneTodoList()
}

const checkShoudDesc = (list, text, checkEl) => {
    const taskFiltered = list.filter((item) => {
        return item.description.includes(text)
    })
    const taskFinded = taskFiltered.find((item) => {
        return item.description == checkEl
    })
    return taskFinded
}
