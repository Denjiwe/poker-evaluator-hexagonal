import { HandInput } from "../../application/dto/HandInput";
import Card from "./Card";

export default class Hand {
    private cards!: Card[];

    constructor(hand: HandInput) {
        this.setCards(hand);
    }

	setCards(hand: HandInput) {
		if (hand.cards.length !== 5) throw new Error("Hand must have 5 cards");
		this.cards = hand.cards.map((card: string) => new Card(card));
	}

	getCards(): Card[] {
		return this.cards;
	}
}