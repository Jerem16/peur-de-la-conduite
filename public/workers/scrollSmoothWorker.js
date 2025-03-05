self.onmessage = function (event) {
    const { start, end, duration, startTime, currentTime } = event.data;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutCubic =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 4) / 2;

    const newScrollY = start + (end - start) * easeInOutCubic;

    self.postMessage({ newScrollY, progress });
};
