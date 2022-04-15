import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"
import { Pop } from "../Utils/Pop.js"

class TodosService {
   async trackTodo(id) {
       let foundTodo = ProxyState.todos.find(t => t.id == id)
       foundTodo.completed = !foundTodo.completed
       const res = await sandboxApi.put('zac/todos/' + foundTodo.id, foundTodo)
       console.log(res.data);
       const editedTodo = ProxyState.todos.findIndex(t => t.id == res.data.id)
       const newTodo = new Todo(res.data)
       ProxyState.todos.splice(editedTodo, 1, new Todo)
       ProxyState.todos = ProxyState.todos
    }
    async deleteTodo(id) {
        await sandboxApi.delete('zac/todos/'+ id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id !== id)
    }
   async addTodo(todoData) {
        const res = await sandboxApi.post('zac/todos', todoData)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }
    async getTodos(){
        try {
            const res = await sandboxApi.get('zac/todos')
            console.log('get todos',res.data);
            ProxyState.todos = res.data.map(t => new Todo(t))
            ProxyState.todos = [...ProxyState.todos, ]
        }
         catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

}

export const todosService = new TodosService()