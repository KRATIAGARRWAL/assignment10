todos = [
    {
        name:"Buy eggs",
        id:"1",
        done: false
    },
    {
        name:"Buy books",
        id:"2",
        done: false
    },
    {
        name:"Do assignment",
        id:"3",
        done: false
    },
    {
        name:"Sleep",
        id:"4",
        done: false
    },
    {
        name:"Preparation for st1",
        id:"5",
        done:false
    }
]
const todoContainer = document.getElementById("todo-container")

function render(){
    todoContainer.innerHTML=""
    todos.forEach(item => {
        todoContainer.appendChild(getTodo(item))
    })
}


function getTodo(item){

    // {
    //     name:"buy eggs",
    //     id:"1",
    //     done: false
    // },
//     <div class="todo">
//     <input id="1" type="checkbox">
//     <label for="1">Do Assignment</label>
// </div>
        const container= document.createElement("div")
        container.classList.add("todo")
        const input =document.createElement("input")
        input.id = item.id;
        input.checked = item.done
        input.type = "checkbox"
        container.appendChild(input)
        input.addEventListener("change", () => {
            item.done = !item.done 
            render()
        })

        const label =document.createElement("label")
        label.htmlFor = item.id;
        label.innerText = item.name
        if (item.done){
            label.classList.add("cut")
        }
        container.appendChild(label)

        return container
}
render()