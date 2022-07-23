import { createContext, useContext, useState } from "react";

const onboardingPageContext = createContext({});

const OnboardingPageContext = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<onboardingPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</onboardingPageContext.Provider>
	);
};

const useOnboardingPage = () => useContext(onboardingPageContext);

export { useOnboardingPage, OnboardingPageContext };
