export type Locale = "en" | "nl";

export const staticRoutes = [
	"/",
	"/our-teacher",
	"/lineage",
	"/activities",
	"/padma-pura",
	"/support",
	"/leden",
	"/foundation",
	"/updates",
	"/contact",
	"/privacy",
] as const;

const labels = {
	en: {
		ourTeacher: "Our Teacher",
		lineage: "Lineage",
		activities: "Activities",
		foundation: "Padma Pura Foundation",
		support: "Support",
		membersPortal: "Members Portal",
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
		membersPortal: "Ledenportaal",
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
        let englishPath = getLocale(pathname) === "nl"
                ? pathname.replace(/^\/nl(?=\/|$)/, "") || "/"
                : pathname;

        if (englishPath === "/leden" || englishPath === "/leden/") {
                englishPath = "/members";
        }

        if (locale === "nl") {
                if (englishPath === "/members" || englishPath === "/members/") {
                        return "/nl/leden/";
                }

                return `/nl${englishPath === "/" ? "/" : englishPath}`;
        }

        return englishPath;
}