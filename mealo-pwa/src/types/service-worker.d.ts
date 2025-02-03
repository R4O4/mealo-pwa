declare module 'vite-plugin-pwa' {
	export interface VitePWAOptions {
		registerType?: 'autoUpdate' | 'prompt' | 'manual';
		includeAssets?: string[];
		manifest?: Record<string, unknown>;
	}
}
