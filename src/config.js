export const getApiBaseUrl = () => {
	const baseURL = import.meta.env.VITE_API_URL;
	if (!baseURL) return '';

	return String(baseURL)
		.trim()
		.replace(/\/+$/, '')
		.replace(/(\/api)+$/i, '/api');
};

export const API_URL = getApiBaseUrl();
