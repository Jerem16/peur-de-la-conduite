import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const screenWidth = req.headers.get("x-screen-width");

        if (!screenWidth) {
            return NextResponse.json({ error: "screenWidth manquant" }, { status: 400 });
        }

        console.log("✅ Largeur reçue via Header :", screenWidth);

        return NextResponse.json({ message: "OK" });
    } catch (error) {
        console.error("Erreur API :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}