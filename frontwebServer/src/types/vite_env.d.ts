interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_DATE_ZONE: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv
}
