const DEFAULT_API_URL = 'https://anant-ai-backend.hf.space/api';

export const getApiBaseUrl = () => {
	const baseURL = import.meta.env.VITE_API_URL || DEFAULT_API_URL;
	if (!baseURL) return '';

	return String(baseURL)
		.trim()
		.replace(/\/+$/, '')
		.replace(/(\/api)+$/i, '/api');
};

export const API_URL = getApiBaseUrl();
