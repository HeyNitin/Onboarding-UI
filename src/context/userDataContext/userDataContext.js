import { createContext, useContext, useReducer } from "react";
import {
	initialValue,
	userDataReducer,
} from "context/userDataContext/userDataReducer";

const userDataContext = createContext({});

const UserDataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userDataReducer, initialValue);

	return (
		<userDataContext.Provider value={{ state, dispatch }}>
			{children}
		</userDataContext.Provider>
	);
};

const useUserData = () => useContext(userDataContext);

export { useUserData, UserDataProvider };
