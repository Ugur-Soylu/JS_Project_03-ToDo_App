const plus = document.querySelector("#plus");
const toDoText = document.querySelector("#to-do")

const addToDo = function(){
    if(toDoText.value != ""){
        const newElement = document.createElement("div");
        newElement.setAttribute("id","task-List");
        newElement.innerHTML = `<button class="button"><img id="tick" src="./images/tickButton.jpg" alt="tick" width="100%" height="100%"></button>
        <p id="text">${toDoText.value}</p>
        <button class="button"><img id="delete" src="./images/deleteButton.png" alt="delete" width="100%" height="100%"></button> <br>`
        
        const taskList = document.querySelector("#header-2");
        taskList.insertAdjacentElement("afterend", newElement)
        toDoText.value = "";
    }

}




const deleteItem = function (){
    const delButton = document.querySelectorAll("#delete");
    delButton.forEach(function(element){
        element.addEventListener("click", () =>{
            const newElement = element.closest("#task-List")
            newElement.remove()
        })
})
}
deleteItem()


const tickItem = function(){
    const tickButton = document.querySelectorAll("#tick");
    tickButton.forEach(function(element){
        element.addEventListener("click",()=>{
            const  newElement = element.closest("#task-List")
            const text = newElement.children[1].textContent;
            newElement.children[1].innerHTML = `<del>${text}</del>`;
        })
    })
}
tickItem()


plus.addEventListener("click",()=>{
    addToDo();
    deleteItem()
    tickItem()
})


