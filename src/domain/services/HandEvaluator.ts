import { Hand } from "../types/Hand";

export default class HandEvaluator {
    evaluate (hand: Hand): string {
		const cardValues: string[] = this.extractCardValues(hand);
		const suits: string[] = this.extractSuits(hand);
		const valueCounts: Record<string, number> = this.countCardValues(cardValues);
		const suitCounts: Record<string, number> = this.countSuits(suits);

		if (this.isRoyalFlush(cardValues, suitCounts)) return "Royal Flush"
		if (this.isStraightFlush(cardValues, suitCounts)) return "Straight Flush";
		if (this.isFourOfAKind(valueCounts)) return "Four of a Kind";
		if (this.isFullHouse(valueCounts)) return "Full House";
		if (this.isFlush(suitCounts)) return "Flush";
		if (this.isStraight(cardValues)) return "Straight";
		if (this.isThreeOfAKind(valueCounts)) return "Three of a Kind";
		if (this.isTwoPair(valueCounts)) return "Two Pair";
		if (this.isPair(valueCounts)) return "Pair";
		return "High Card";
    }

	private extractCardValues(hand: Hand): string[] {
		return hand.cards.map(card => card.slice(0, -1));
	}

	private extractSuits(hand: Hand): string[] {
		return hand.cards.map(card => card.slice(-1));
	}

	private countCardValues(cardValues: string[]): Record<string, number> {
		return cardValues.reduce((counts: Record<string, number>, value: string) => {
		counts[value] = (counts[value] || 0) + 1;
		return counts;
		}, {});
	}

	private countSuits(suits: string[]): Record<string, number> {
		return suits.reduce((counts: Record<string, number>, suit: string) => {
		counts[suit] = (counts[suit] || 0) + 1;
		return counts;
		}, {});
	}

	private isRoyalFlush(cardValues: string[], suitCounts: Record<string, number>): boolean {
		const isFlush = Object.values(suitCounts).some(count => count === 5);
		return isFlush
		&& cardValues.includes('A')
		&& cardValues.includes('K')
		&& cardValues.includes('Q')
		&& cardValues.includes('J')
		&& cardValues.includes('10');
	}

	private isStraightFlush(cardValues: string[], suitCounts: Record<string, number>): boolean {
		return this.isFlush(suitCounts) && this.isStraight(cardValues);
	}

	private isFourOfAKind(valueCounts: Record<string, number>): boolean {
		return Object.values(valueCounts).includes(4);
	}

	private isFullHouse(valueCounts: Record<string, number>): boolean {
		return Object.values(valueCounts).includes(3) && Object.values(valueCounts).includes(2);
	}

	private isFlush(suitCounts: Record<string, number>): boolean {
		return Object.values(suitCounts).some(count => count === 5);
	}

	private isStraight(cardValues: string[]): boolean {
		const order = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		const cardValuesAsNumbers = cardValues.map(value => order.indexOf(value));
		return cardValuesAsNumbers.sort((a, b) => a - b).every((num, i, arr) => i === arr.length - 1 || num + 1 === arr[i + 1]);
	}

	private isThreeOfAKind(valueCounts: Record<string, number>): boolean {
		return Object.values(valueCounts).includes(3);
	}

	private isTwoPair(valueCounts: Record<string, number>): boolean {
		return Object.values(valueCounts).filter(c => c === 2).length === 2;
	}

	private isPair(valueCounts: Record<string, number>): boolean {
		return Object.values(valueCounts).includes(2);
	}
}