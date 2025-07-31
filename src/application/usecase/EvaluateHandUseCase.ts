import HandEvaluator from "../../domain/services/HandEvaluator";
import type { Hand } from "../../domain/types/Hand";
import type { Output } from "../../domain/types/Output";

export default class EvaluateHandUseCase {

	async execute (hand: Hand): Promise<Output> {
		const evaluator = new HandEvaluator();

		const output: Output = {
			hand: ""
		};

		output.hand = evaluator.evaluate(hand);

		return output;
	}
}