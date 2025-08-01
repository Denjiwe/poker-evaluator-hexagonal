import Hand from "../src/domain/entity/Hand";

test("Should test a valid hand", function () {
    const hand = new Hand({
        cards: ["9H", "AC", "4D", "7C", "3S"]
    });
    expect(hand.getCards().length).toBe(5);
});

test("Should test an invalid hand", function () {
    expect(() => new Hand({
        cards: ["9H", "AC", "4D", "7C", "3S", "9C"]
    })).toThrow("Hand must have 5 cards");
});