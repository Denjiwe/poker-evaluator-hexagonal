import HttpServer from "./HttpServer";
import express from "express";

export default class ExpressAdapter implements HttpServer {
	app: any;

	constructor () {
		this.app = express();
		this.app.use(express.json());
	}

	register(method: string, url: string, callback: Function): void {
		this.app[method](url, async function (req: express.Request, res: express.Response): Promise<void> {
			try {
				const output = await callback(req.params, req.body);
				res.json(output);
			} catch (e: any) {
				res.status(422).json({
					message: e.message
				});
			}
		});
	}

	listen(port: number): void {
		this.app.listen(port);
	}

}
