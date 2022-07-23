import { userDataReducer } from "context/userDataContext/userDataReducer";

describe("Testing userData Reducer", () => {
	const initialValue = {
		fullName: "",
		displayName: "",
		workspaces: [],
		usageType: "",
	};

	test("Testing updating fullName of user", () => {
		const expectedValue = {
			fullName: "Nitin Kalra",
			displayName: "",
			workspaces: [],
			usageType: "",
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "fullName",
			payload: "Nitin Kalra",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating displayName of user", () => {
		const expectedValue = {
			fullName: "",
			displayName: "HeyNitin",
			workspaces: [],
			usageType: "",
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "displayName",
			payload: "HeyNitin",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing addition of new workspace", () => {
		const expectedValue = {
			fullName: "",
			displayName: "",
			workspaces: [{ workspaceName: "001", workspaceURL: "" }],
			usageType: "",
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "addWorkspace",
			payload: { workspaceName: "001", workspaceURL: "" },
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating usageType of user", () => {
		const expectedValue = {
			fullName: "",
			displayName: "",
			workspaces: [],
			usageType: "individual",
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "usageType",
			payload: "individual",
		});

		expect(receivedValue).toEqual(expectedValue);
	});
});
