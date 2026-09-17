import type { APIRoute } from "astro";
import { getLocalizedPath, staticRoutes } from "../lib/locale";

const toSitemapPath = (path: string) => path.endsWith("/") ? path : `${path}/`;

export const GET: APIRoute = ({ site }) => {
	const urls = staticRoutes.flatMap((route) => [
		getLocalizedPath(route, "en"),
		getLocalizedPath(route, "nl"),
	]);
	const entries = urls.map((path) => `\t<url><loc>${new URL(toSitemapPath(path), site!).href}</loc></url>`).join("\n");
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};