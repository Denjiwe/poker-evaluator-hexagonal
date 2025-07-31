import type { Hand } from "../../domain/types/Hand";
import type { Output } from "../../domain/types/Output";

export default class EvaluateHandUseCase {

	async execute (hand: Hand): Promise<Output> {
		const values: string[] = hand.cards.map((card: string) => card.slice(0, -1));
		const suits: string[] = hand.cards.map((card: string) => card.slice(-1));

		const valuesCount: Record<string, number> = values.reduce((acc: Record<string, number>, val: string) => {
			acc[val] = (acc[val] || 0) + 1;
			return acc;
		}, {});

		const suitsCount: Record<string, number> = suits.reduce((acc: Record<string, number>, naipe: string) => {
			acc[naipe] = (acc[naipe] || 0) + 1;
			return acc;
		}, {});

		const flush: boolean = Object.values(suitsCount).some((count: number) => count === 5);

		const royalFlush: boolean = flush && 
						values.includes('A') &&
						values.includes('K') &&
						values.includes('Q') &&
						values.includes('J') &&
						values.includes('10');

		if (!royalFlush) {
			const order: string = '23456789TJQKA';
			const numbers: number[] = values.map((val: string) => order.indexOf(val));
			
			const straight: boolean = numbers.sort((a, b) => a - b).every((num, i, arr) => 
				i === arr.length - 1 || num + 1 === arr[i + 1]);

			const counts: number[] = Object.values(valuesCount);
			
			if (flush && straight) return { hand: "Straight Flush" };
			if (counts.includes(4)) return { hand: "Four of a Kind" };
			if (counts.includes(3) && counts.includes(2)) return { hand: "Full House" };
			if (flush) return { hand: "Flush" };
			if (straight) return { hand: "Straight" };
			if (counts.includes(3)) return { hand: "Three of a Kind" };
			if (counts.filter(c => c === 2).length === 2) return { hand: "Two Pair" };
			if (counts.includes(2)) return { hand: "Pair" };
			return { hand: "High Card" };
		}

		return { hand: "Royal Flush" };
	}
}