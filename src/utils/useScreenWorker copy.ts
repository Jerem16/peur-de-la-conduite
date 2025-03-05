"use client";
import { useEffect, useState } from "react";

function useScreenWorker() {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const worker = new Worker(
                new URL("/workers/screenWorker.js", window.location.origin) // ✅ Chemin correct !
            );

            // ✅ Vérifier s'il existe déjà une valeur dans sessionStorage
            const storedWidth = sessionStorage.getItem("screen_width");
            const initialWidth = storedWidth
                ? parseInt(storedWidth)
                : window.innerWidth;

            worker.postMessage({ type: "INIT", screenWidth: initialWidth });

            // ✅ Écouter les messages du worker
            worker.onmessage = (event) => {
                const width = Number(event.data.screenWidth);
                console.log("🚀 Cookie screen_width défini :", width);
                if (!isNaN(width)) {
                    setScreenWidth(width);
                    sessionStorage.setItem("screen_width", String(width)); // ✅ Utilisation de sessionStorage
                }
            };

            return () => worker.terminate();
        }
    }, []);

    return screenWidth;
}

export default useScreenWorker;
import { NextResponse } from "next/server";

export function middleware(req) {
    const res = NextResponse.next();
    const url = req.nextUrl;
    const screenWidth = req.cookies.get("screen_width")?.value;

    console.log(`📏 Cookie screen_width avant suppression :`, screenWidth);

    // Supprimer le cookie

    console.log("🗑 Cookie screen_width supprimé");

    if (screenWidth && parseInt(screenWidth) <= 768) {
        if (!url.hostname.startsWith("m.")) {
            console.log("🔀 Redirection vers site mobile", screenWidth);
            return NextResponse.redirect(
                new URL(
                    `https://m.peur-de-la-conduite.fr${url.pathname}`,
                    req.url
                )
            );
        }
    } else {
        if (url.hostname.startsWith("m.")) {
            console.log("🔀 Redirection vers site desktop", screenWidth);
            // return NextResponse.redirect(
            //     new URL(
            //         `https://peur-de-la-conduite.fr${url.pathname}`,
            //         req.url
            //     )
            // );
        }
    }

    return res;
}
