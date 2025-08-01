import Card from "../src/domain/entity/Card";

test("Should test a valid card", function () {
    const card = new Card("9H");
    expect(card.getCardValue()).toBe("9");
    expect(card.getSuit()).toBe("H");
});

test("Should test an invalid suit", function () {
    expect(() => new Card("9F")).toThrow("Invalid suit: F");
});

test("Should test an invalid cardValue", function () {
    expect(() => new Card("29F")).toThrow("Invalid card value: 29");
});