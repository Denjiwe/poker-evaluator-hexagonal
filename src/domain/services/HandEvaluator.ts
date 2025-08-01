import Hand from "../entity/Hand";
import { HandWorth } from "../enum/HandWorth";

export default interface HandEvaluator {
    evaluate(hand: Hand): HandWorth;
}