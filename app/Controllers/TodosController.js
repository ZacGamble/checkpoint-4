import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
function _drawTodos() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template 
}
function _drawFraction() {
    let template = ''
    ProxyState.todos.find(t => template += t.FractionTemplate)
    document.getElementById('fraction').innerHTML = template 
}
export class TodosController {
    constructor(){
        this.getTodos()
        ProxyState.on('todos', _drawTodos)
        ProxyState.on('todos', _drawFraction)
    }
   async addTodo(){
        window.event.preventDefault();
        try {
            /**@type {HTMLFormElement} */
            // @ts-ignore
            const form = window.event.target
            
            const todoData = {           
                description: form.description.value
            }
            console.log(todoData);
       await todosService.addTodo(todoData)
 
        } catch (error) {
            console.error("[list form error]", error) 
        }
    }
   async getTodos() {
       try {
           await todosService.getTodos()
       } catch (error) {
        Pop.toast(error.message, 'error')
        console.log(error);
       }
    }
    async deleteTodo(id) {
        if(window.confirm("Are you sure?")){
    try {
            await todosService.deleteTodo(id)
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error);
        }
    }
}
    async trackTodo(id){
        try {
            await todosService.trackTodo(id)
            
        } catch (error) {
            // Pop.toast(error.message, 'error')
            // console.log(error);
        }
    }
}

