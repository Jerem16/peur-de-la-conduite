self.onmessage = function(event) {
    const { sections, scrollY } = event.data;
    let currentSectionId = "";

    // Déterminer la section visible
    sections.forEach(({ id }) => {
        const sectionTop = event.data.positions[id]?.top;
        const sectionHeight = event.data.positions[id]?.height;
        const isInView =
            scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight;

        if (isInView) {
            currentSectionId = id;
        }
    });

    // Retourner la section active au main thread
    self.postMessage({ currentSectionId });
};
