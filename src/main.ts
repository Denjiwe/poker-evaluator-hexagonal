import ExpressAdapter from "./infra/http/ExpressAdapter";
import MainController from "./infra/controller/MainController";
import Registry from "./infra/di/Registry";

const httpServer = new ExpressAdapter();
const registry = Registry.getInstance();
registry.register("httpServer", httpServer);

new MainController();
httpServer.listen(3000);
