const initialValue = {
	names: {
		fullName: "",
		displayName: "",
		workspaceName: "",
	},
	workspaceURL: "",
	usageType: "",
	currentScreen: 1,
};

const userDataReducer = (state, action) => {
	switch (action.type) {
		case "fullName":
			return { ...state, names: { ...state.names, fullName: action.payload } };

		case "displayName":
			return {
				...state,
				names: { ...state.names, displayName: action.payload },
			};

		case "workspaceName":
			return {
				...state,
				names: { ...state.names, workspaceName: action.payload },
			};

		case "workspaceURL":
			return { ...state, workspaceURL: action.payload };

		case "usageType":
			return { ...state, usageType: action.payload };

		case "nextPage":
			return { ...state, currentScreen: state.currentScreen + 1 };

		default:
			return state;
	}
};

export { initialValue, userDataReducer };
