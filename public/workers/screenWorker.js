self.onmessage = (event) => {
    if (event.data.type === "INIT") {
        const screenWidth = event.data.screenWidth;

        // ✅ Envoyer la largeur au serveur via un header HTTP
        fetch("/api/set-screen-width", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-screen-width": String(screenWidth),
            },
        });

        self.postMessage({ screenWidth });
    }
};
