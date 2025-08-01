import EvaluateHandUseCase from "../src/application/usecase/EvaluateHandUseCase";
import { HandInput } from "../src/application/dto/HandInput";
import TexasHoldemEvaluator from "../src/domain/services/TexasHoldemEvaluator";

const useCase = new EvaluateHandUseCase(new TexasHoldemEvaluator());

test("Should test a High Card hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "AC", "4D", "7C", "3S"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("High Card");
});

test("Should test a Pair hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "AC", "4D", "4C", "3S"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Pair");
});

test("Should test a Two Pair hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "3C", "4D", "4C", "3S"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Two Pair");
});

test("Should test a Three of a Kind hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "4C", "4D", "4C", "3S"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Three of a Kind");
});

test("Should test a Straight hand", async function () {
    const inputHand: HandInput = {
        cards: ["8H", "4C", "5D", "6C", "7S"] 
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Straight");
});

test("Should test a Flush hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "4H", "5H", "8H", "7H"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Flush");
});

test("Should test a Full House hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "5H", "5S", "3D", "3S"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Full House");
});

test("Should test a Four of a Kind hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "5H", "5S", "5D", "5C"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Four of a Kind");
});

test("Should test a Straight Flush hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "4H", "5H", "6H", "7H"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Straight Flush");
});

test("Should test a Royal Flush hand", async function () {
    const inputHand: HandInput = {
        cards: ["AC", "KC", "QC", "JC", "10C"]
    };
    const output = await useCase.execute(inputHand);
    expect(output.hand).toBe("Royal Flush");
});
