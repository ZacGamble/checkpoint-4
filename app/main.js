import { BackgroundController } from "./Controllers/BackgroundController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  todosController = new TodosController()
  clockController = new ClockController()
  quoteController = new QuoteController()
  backgroundController = new BackgroundController()
  weatherController = new WeatherController()
  
}

window["app"] = new App();
