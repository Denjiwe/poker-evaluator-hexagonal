import axios from "axios";
import { HandInput } from "../src/application/dto/HandInput";
import { HandOutput } from "../src/application/dto/HandOutput";

axios.defaults.validateStatus = function () {
	return true;
}

test("Should test a High Card hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "AC", "4D", "7C", "3S"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
	const Handoutput: HandOutput = response.data;
	expect(Handoutput.hand).toBe("High Card");
});

test("Should test a Pair hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "AC", "4D", "4C", "3S"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Pair");
});

test("Should test a Two Pair hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "3C", "4D", "4C", "3S"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Two Pair");
});

test("Should test a Three of a Kind hand", async function () {
    const inputHand: HandInput = {
        cards: ["9H", "4C", "4D", "4C", "3S"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Three of a Kind");
});

test("Should test a Straight hand", async function () {
    const inputHand: HandInput = {
        cards: ["8H", "4C", "5D", "6C", "7S"] 
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Straight");
});

test("Should test a Flush hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "4H", "5H", "8H", "7H"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Flush");
});

test("Should test a Full House hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "5H", "5S", "3D", "3S"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Full House");
});

test("Should test a Four of a Kind hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "5H", "5S", "5D", "5C"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Four of a Kind");
});

test("Should test a Straight Flush hand", async function () {
    const inputHand: HandInput = {
        cards: ["3H", "4H", "5H", "6H", "7H"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Straight Flush");
});

test("Should test a Royal Flush hand", async function () {
    const inputHand: HandInput = {
        cards: ["AC", "KC", "QC", "JC", "10C"]
    };
	const response = await axios.post("http://localhost:3000/evaluate-hand", inputHand);
    const Handoutput: HandOutput = response.data;
    expect(Handoutput.hand).toBe("Royal Flush");
});