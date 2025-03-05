let timeoutId = null;
let isRunning = false;

self.onmessage = function(event) {
    const { type, delay } = event.data;

    if (type === "start" && !isRunning) {
        isRunning = true;
        self.postMessage({ type: "status", isRunning });

        timeoutId = setTimeout(() => {
            self.postMessage({ type: "timeoutComplete" });
            isRunning = false;
            self.postMessage({ type: "status", isRunning });
        }, delay);
    }

    if (type === "clear") {
        clearTimeout(timeoutId);
        isRunning = false;
        self.postMessage({ type: "status", isRunning });
    }
};
