export type Locale = "en" | "nl";

const labels = {
	en: {
		ourTeacher: "Our Teacher",
		lineage: "Lineage",
		activities: "Activities",
		foundation: "Padma Pura Foundation",
		support: "Support",
		foundationAnbi: "Foundation & ANBI",
		updates: "Updates",
		contact: "Contact",
		privacy: "Privacy",
	},
	nl: {
		ourTeacher: "Onze leraar",
		lineage: "Lineage",
		activities: "Activiteiten",
		foundation: "Padma Pura Foundation",
		support: "Steun",
		foundationAnbi: "Stichting & ANBI",
		updates: "Updates",
		contact: "Contact",
		privacy: "Privacy",
	},
} as const;

export function getLocale(pathname: string): Locale {
	return pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "en";
}

export function getLabels(locale: Locale) {
	return labels[locale];
}

export function getLocalizedPath(pathname: string, locale: Locale) {
	const englishPath = getLocale(pathname) === "nl"
		? pathname.replace(/^\/nl(?=\/|$)/, "") || "/"
		: pathname;

	if (locale === "nl") {
		return `/nl${englishPath === "/" ? "/" : englishPath}`;
	}

	return englishPath;
}