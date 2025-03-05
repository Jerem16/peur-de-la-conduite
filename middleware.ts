import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const url = req.nextUrl;

    // 🔍 Essayer de récupérer screenWidth depuis le header OU le cookie
    let screenWidth = req.headers.get("x-screen-width") && req.cookies.get("screen-width")?.value;
    console.log("📏 Largeur détectée :", screenWidth);

    if (screenWidth) {
        const width = parseInt(screenWidth);
        console.log("📏 width :", width);

        if (width <= 768 && !url.hostname.startsWith("m.")) {
            console.log("🔀 Redirection vers mobile");
            return NextResponse.redirect(new URL(`https://m-peur-de-la-conduite.lemaignent.com${url.pathname}`));
        }
    }

    return res;
}
