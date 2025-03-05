import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const screenWidth = req.headers.get("x-screen-width");

        if (!screenWidth) {
            return NextResponse.json({ error: "screenWidth manquant" }, { status: 400 });
        }

        console.log("✅ Largeur reçue via Header :", screenWidth);

        const response = NextResponse.json({ message: "OK" });

        // 🔹 Définir un cookie accessible par tous les sous-domaines
        response.headers.set(
            "Set-Cookie",
            `screenWidth=${screenWidth}; Path=/; Domain=.lemaignent.com; Secure; HttpOnly; SameSite=None`
        );

        return response;
    } catch (error) {
        console.error("Erreur API :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
