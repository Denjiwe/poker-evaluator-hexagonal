import HttpServer from "../http/HttpServer";
import { inject } from "../di/Registry";

export default class MainController {
	@inject("httpServer")
	httpServer!: HttpServer;
}
