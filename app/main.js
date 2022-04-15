import { ClockController } from "./Controllers/ClockController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController()
  clockController = new ClockController()
  quoteController = new QuoteController()
  
}

window["app"] = new App();
