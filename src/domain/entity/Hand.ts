import { CardValue } from "../enum/CardValue";
import { Suit } from "../enum/Suit";
import { HandInput } from "../../application/dto/HandInput";
import Card from "./Card";

export default class Hand {
    private cards: Card[];

    constructor(hand: HandInput) {
        this.cards = hand.cards.map((card: string) => new Card(card));
    }

	extractCardValues(): CardValue[] {
		return this.cards.map(card => card.getCardValue());
	}

	extractSuits(): Suit[] {
		return this.cards.map(card => card.getSuit());
	}
}