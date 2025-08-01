import { CardValue } from "../enum/CardValue";
import { Suit } from "../enum/Suit";

export default class Card {
    private value!: CardValue;
    private suit!: Suit;

    constructor(card: string) {
        this.setValue(card);
        this.setSuit(card);
    }

    setValue(card: string) {
        const cardValue = card.slice(0, -1);
        const enumKey = Object.keys(CardValue).find(key => CardValue[key as keyof typeof CardValue] === cardValue);

        if (!enumKey) throw new Error(`Invalid card value: ${cardValue}`);

        this.value = CardValue[enumKey as keyof typeof CardValue];
    }

    setSuit(card: string) {
        const suit = card.slice(-1);
        const enumKey = Object.keys(Suit).find(key => Suit[key as keyof typeof Suit] === suit);

        if (!enumKey) throw new Error(`Invalid suit: ${suit}`);

        this.suit = Suit[enumKey as keyof typeof Suit];
    }

    getCardValue(): CardValue {
        return this.value;
    }

    getSuit(): Suit {
        return this.suit;
    }
}