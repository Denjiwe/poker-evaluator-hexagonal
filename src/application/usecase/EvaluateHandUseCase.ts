import Hand from "../../domain/entity/Hand";
import HandEvaluator from "../../domain/services/HandEvaluator";
import { HandInput } from "../dto/HandInput";
import { HandOutput } from "../dto/HandOutput";

export default class EvaluateHandUseCase {

	constructor (readonly evaluator: HandEvaluator) {}

	async execute (handInput: HandInput): Promise<HandOutput> {
		const hand = new Hand(handInput);

		const handWorth = this.evaluator.evaluate(hand);
		const output: HandOutput = {
			hand: handWorth
		};

		return output;
	}
}