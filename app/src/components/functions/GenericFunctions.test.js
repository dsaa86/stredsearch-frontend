import { generateFormattedIdentifier } from "./GenericFunctions";

describe("generateFormattedIdentifier", () => {
	it("should format identifier", () => {
		const mockIdentifier = "test-identifier";

		const result = generateFormattedIdentifier(mockIdentifier);

		expect(result).toEqual("Test Identifier");
	});

	it("should format identifier without hyphen", () => {
		const mockIdentifier = "testidentifier";

		const result = generateFormattedIdentifier(mockIdentifier);

		expect(result).toEqual("Testidentifier ");
	});
});
