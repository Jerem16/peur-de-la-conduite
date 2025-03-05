import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const url = req.nextUrl;

    // ✅ Lire la largeur d'écran depuis le Header (envoyé via fetch)
    const screenWidth = req.headers.get("x-screen-width");
    console.log("📏 Largeur détectée via Header :", screenWidth);

    if (screenWidth) {
        const width = parseInt(screenWidth);

        // ✅ Redirection basée sur la largeur détectée
        if (width <= 768 && !url.hostname.startsWith("m.")) {
            console.log("🔀 Redirection vers mobile");
            return NextResponse.redirect(
                new URL(
                    `https://m-peur-de-la-conduite.lemaignent.com${url.pathname}`,
                    req.url
                )
            );

        }

    }

    return res;
}
