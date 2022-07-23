import { nameValidator, websiteValidator } from "services/validatorServices";
import { getFirstName } from "./getFirstNameService";

test("Testing the function to get first name of user", () => {
	let initialValue = "Nitin Kalra";
	let expectedValue = "Nitin";

	let value = getFirstName(initialValue);

	expect(value).toBe(expectedValue);
});

describe("Testing Name validator", () => {
	test("Testing wrong format", () => {
		let name = "Nitiw@n Kalra";
		let result = nameValidator(name);

		expect(result).toBe(false);
	});
	test("Testing correct format", () => {
		let name = "Nitin Kalra";
		let result = nameValidator(name);

		expect(result).toBe(true);
	});
});

describe("Testing Website validator", () => {
	test("Testing wrong format", () => {
		let website = "Nitin$gmail.com";
		let result = websiteValidator(website);

		expect(result).toBe(false);
	});
	test("Testing correct format", () => {
		let website = "www.github.com";
		let result = websiteValidator(website);

		expect(result).toBe(true);
	});
});
