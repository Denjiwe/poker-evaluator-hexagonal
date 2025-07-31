import ExpressAdapter from "./infra/http/ExpressAdapter";
import MainController from "./infra/controller/MainController";
import Registry from "./infra/di/Registry";
import EvaluateHandUseCase from "./application/usecase/EvaluateHandUseCase";

const httpServer = new ExpressAdapter();
const registry = Registry.getInstance();
const evaluateHandUseCase = new EvaluateHandUseCase();
registry.register("httpServer", httpServer);
registry.register("evaluateHandUseCase", evaluateHandUseCase);

new MainController();
httpServer.listen(3000);
