let lastWidth = null;

self.onmessage = (event) => {
    const { type, screenWidth } = event.data;

    if (type === "INIT") {
        lastWidth = screenWidth;
        self.postMessage({ screenWidth: lastWidth });
    }

    if (type === "UPDATE") {
        if (Math.abs(screenWidth - lastWidth) > 9) {
            lastWidth = screenWidth;
            self.postMessage({ screenWidth: lastWidth });
        }
    }
};
