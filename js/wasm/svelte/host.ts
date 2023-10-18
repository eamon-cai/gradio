export function is_self_host(url: URL): boolean {
	return (
		url.host === window.location.host ||
		url.host === "localhost:7860" ||
		url.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
		url.origin === "http://lite.local" // A special host name set when the endpoint is a local file (`file:/*`). Ref: `determine_protocol()` in `client/js/src/utils.ts`
	);
}
