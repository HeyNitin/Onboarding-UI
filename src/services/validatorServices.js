const nameFormat =
	/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
const websiteFormat =
	/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

export const nameValidator = (name) => nameFormat.test(name);

export const websiteValidator = (name) => websiteFormat.test(name);
