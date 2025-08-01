import Hand from "../entity/Hand";
import { CardValue } from "../enum/CardValue";
import { HandWorth } from "../enum/HandWorth";
import { Suit } from "../enum/Suit";
import HandEvaluator from "./HandEvaluator";

export default class TexasHoldemEvaluator implements HandEvaluator {
    evaluate(hand: Hand): HandWorth {
		const cardValues = hand.getCards().map(card => card.getCardValue());
		const suits = hand.getCards().map(card => card.getSuit());
		const cardValueCounts = this.countOccurrences(cardValues);
		const suitCounts = this.countOccurrences(suits);

		return this.determineHandWorth(cardValues, cardValueCounts, suitCounts);
	}

	private countOccurrences<T extends CardValue | Suit>(items: T[]): Record<T, number> {
		return items.reduce((counts: Record<T, number>, item: T) => {
			counts[item] = (counts[item] || 0) + 1;
			return counts;
		}, {} as Record<T, number>);
	}

	private determineHandWorth(cardValues: CardValue[], cardValueCounts: Record<CardValue, number>, suitCounts: Record<Suit, number>): HandWorth {
		if (this.isRoyalFlush(cardValues, suitCounts)) return HandWorth.ROYAL_FLUSH;
		if (this.isStraightFlush(cardValues, suitCounts)) return HandWorth.STRAIGHT_FLUSH;
		if (this.isFourOfAKind(cardValueCounts)) return HandWorth.FOUR_OF_A_KIND;
		if (this.isFullHouse(cardValueCounts)) return HandWorth.FULL_HOUSE;
		if (this.isFlush(suitCounts)) return HandWorth.FLUSH;
		if (this.isStraight(cardValues)) return HandWorth.STRAIGHT;
		if (this.isThreeOfAKind(cardValueCounts)) return HandWorth.THREE_OF_A_KIND;
		if (this.isTwoPair(cardValueCounts)) return HandWorth.TWO_PAIR;
		if (this.isPair(cardValueCounts)) return HandWorth.PAIR;
		return HandWorth.HIGH_CARD;
	}

	private isRoyalFlush(cardValues: CardValue[], suitCounts: Record<Suit, number>): boolean {
		return this.isRoyal(cardValues) && this.isFlush(suitCounts);
	}

	private isStraightFlush(cardValues: CardValue[], suitCounts: Record<Suit, number>): boolean {
		return this.isFlush(suitCounts) && this.isStraight(cardValues);
	}

	private isFourOfAKind(cardValueCounts: Record<CardValue, number>): boolean {
		return Object.values(cardValueCounts).includes(4);
	}

	private isFullHouse(cardValueCounts: Record<CardValue, number>): boolean {
		const values = Object.values(cardValueCounts);
		return values.includes(3) && values.includes(2);
	}

	private isRoyal(cardValues: CardValue[]): boolean {
		return [CardValue.ACE, CardValue.KING, CardValue.QUEEN, CardValue.JACK, CardValue.TEN].every(value =>
			cardValues.includes(value)
		);
	}

	private isFlush(suitCounts: Record<Suit, number>): boolean {
		return Object.values(suitCounts).some(count => count === 5);
	}

	private isStraight(cardValues: CardValue[]): boolean {
		const order = Object.values(CardValue);
		const cardIndices = cardValues.map(value => order.indexOf(value)).sort((a, b) => a - b);
		return cardIndices.every((index, i, arr) => i === arr.length - 1 || index + 1 === arr[i + 1]);
	}

	private isThreeOfAKind(cardValueCounts: Record<CardValue, number>): boolean {
		return Object.values(cardValueCounts).includes(3);
	}

	private isTwoPair(cardValueCounts: Record<CardValue, number>): boolean {
		return Object.values(cardValueCounts).filter(count => count === 2).length === 2;
	}

	private isPair(cardValueCounts: Record<CardValue, number>): boolean {
		return Object.values(cardValueCounts).includes(2);
	}
}