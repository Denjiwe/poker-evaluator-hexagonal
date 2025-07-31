import HttpServer from "../http/HttpServer";
import { inject } from "../di/Registry";
import EvaluateHandUseCase from "../../application/usecase/EvaluateHandUseCase";
import { HandOutput } from "../../application/dto/HandOutput";

export default class MainController {
	@inject("httpServer")
	httpServer!: HttpServer;
	@inject("evaluateHandUseCase")
	evaluateHandUseCase!: EvaluateHandUseCase;

	constructor () {
		this.httpServer.register("post", "/evaluate-hand", async (params: any, body: any) => {
			const output: HandOutput = await this.evaluateHandUseCase.execute(body);
			return output;
		});
	}
}
