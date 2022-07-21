import { userDataReducer } from "context/userDataContext/userDataReducer";

describe("Testing userData Reducer", () => {
	const initialValue = {
		names: {
			fullName: "",
			displayName: "",
			workspaceName: "",
		},
		workspaceURL: "",
		usageType: "",
		currentPage: 1,
	};

	test("Testing updating fullName of user", () => {
		const expectedValue = {
			names: {
				fullName: "Nitin Kalra",
				displayName: "",
				workspaceName: "",
			},
			workspaceURL: "",
			usageType: "",
			currentPage: 1,
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "fullName",
			payload: "Nitin Kalra",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating displayName of user", () => {
		const expectedValue = {
			names: {
				fullName: "",
				displayName: "HeyNitin",
				workspaceName: "",
			},
			workspaceURL: "",
			usageType: "",
			currentPage: 1,
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "displayName",
			payload: "HeyNitin",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating workspaceName of user", () => {
		const expectedValue = {
			names: {
				fullName: "",
				displayName: "",
				workspaceName: "Nitin Kalra",
			},
			workspaceURL: "",
			usageType: "",
			currentPage: 1,
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "workspaceName",
			payload: "Nitin Kalra",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating workspaceURL of user", () => {
		const expectedValue = {
			names: {
				fullName: "",
				displayName: "",
				workspaceName: "",
			},
			workspaceURL: "www.nitinkalra.me",
			usageType: "",
			currentPage: 1,
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "workspaceURL",
			payload: "www.nitinkalra.me",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating usageType of user", () => {
		const expectedValue = {
			names: {
				fullName: "",
				displayName: "",
				workspaceName: "",
			},
			workspaceURL: "",
			usageType: "individual",
			currentPage: 1,
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "usageType",
			payload: "individual",
		});

		expect(receivedValue).toEqual(expectedValue);
	});

	test("Testing updating currentPage of user", () => {
		const expectedValue = {
			names: {
				fullName: "",
				displayName: "",
				workspaceName: "",
			},
			workspaceURL: "",
			usageType: "",
			currentPage: 2,
		};

		const receivedValue = userDataReducer(initialValue, {
			type: "nextPage",
		});

		expect(receivedValue).toEqual(expectedValue);
	});
});
