import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
function _drawTodos() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template 
}
export class TodosController {
    constructor(){
        ProxyState.on('todos', _drawTodos)
        _drawTodos()
        this.getTodos()
        
    }

   async addTodo(id){
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
    try {
        const deleteTodo = await todosService.deleteTodo(id)
    } catch (error) {
        Pop.toast(error.message, 'error')
        console.log(error);
    }
    }
    async trackTodo(id){
        try {
            await todosService.trackTodo(id)
        } catch (error) {
            // Pop.toast(error.message, 'error')
            console.log(error);
        }
    }
}

