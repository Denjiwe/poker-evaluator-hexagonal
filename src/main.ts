import ExpressAdapter from "./infra/http/ExpressAdapter";
import MainController from "./infra/controller/MainController";
import Registry from "./infra/di/Registry";
import EvaluateHandUseCase from "./application/usecase/EvaluateHandUseCase";
import TexasHoldemEvaluator from "./domain/services/TexasHoldemEvaluator";

const httpServer = new ExpressAdapter();
const registry = Registry.getInstance();
const handEvaluator = new TexasHoldemEvaluator();
const evaluateHandUseCase = new EvaluateHandUseCase(handEvaluator);
registry.register("httpServer", httpServer);
registry.register("evaluateHandUseCase", evaluateHandUseCase);

new MainController();
httpServer.listen(3000);
