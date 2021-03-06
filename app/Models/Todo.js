
import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed || false 
    }
    
    
    get Template(){
        return `
        <div class="d-flex justify-content-between p-1 border-bottom poppin text-light rounded text mt-2 todo">
        <input ${this.completed == true ? 'checked' : ''} onclick="app.todosController.trackTodo('${this.id}')" class='form-check-input me-1 action' name="done" type ='checkbox' id="done" value="yes" title="click to toggle status">
        <li>${this.description}
        </li>
        <i class="mdi mdi-delete selectable pointer text-light on-hover rounded" title="Delete" onclick="app.todosController.deleteTodo('${this.id}')" minlength="3" maxlength="50">
        </i>
        </div>
        `  
    }
    get Numerator() {
        let numerator = 0
        let completedTodos = ProxyState.todos.filter(t => t.completed == true)
        numerator = completedTodos.length
          return numerator
        }
    get FractionTemplate(){
        return `${this.Numerator}/${ProxyState.todos.length} completed`
    }
}