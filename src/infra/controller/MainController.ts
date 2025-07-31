import HttpServer from "../http/HttpServer";
import { inject } from "../di/Registry";
import EvaluateHandUseCase from "../../application/usecase/EvaluateHandUseCase";
import { Output } from "../../domain/types/Output";

export default class MainController {
	//estudar inject
	@inject("httpServer")
	httpServer!: HttpServer;
	@inject("evaluateHand")
	evaluateHand!: EvaluateHandUseCase;

	constructor () {
		this.httpServer.register("post", "/evaluate-hand", async (params: any, body: any) => {
			const output: Output = await this.evaluateHand.execute(body);
			return output;
		});
	}
}
