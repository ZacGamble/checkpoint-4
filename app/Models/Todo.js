
import { generateId } from "../Utils/generateId.js";


export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed || false 
    }

    get Template(){
        return `<div class="d-flex justify-content-between p-1 border-bottom">
        <input ${this.completed == true ? 'checked' : ''} onclick="app.todosController.trackTodo('${this.id}')" class='form-check-input me-1' name="done" type ='checkbox' id="done" value="yes">
        <li>${this.description}
        </li>
        <i class="mdi mdi-delete selectable pointer bg-info text-dark on-hover rounded" title="Delete" onclick="app.todosController.deleteTodo('${this.id}')" minlength="3" maxlength="50">
        </i>
        </div>
        `
        
    }
}