"use client";

export const scrollTime = (
    currentTime: number,
    startTime: number,
    duration: number,
    start: number,
    end: number
) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Limiter à 1 pour éviter un dépassement
    const easeInOutCubic =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 4) / 2; // Fonction d'accélération/décélération

    window.scrollTo(0, start + (end - start) * easeInOutCubic);

    if (progress < 1) {
        window.requestAnimationFrame((currentTime) =>
            scrollTime(currentTime, startTime, duration, start, end)
        ); // Continuer le défilement jusqu'à la fin
    }
};

// Fonction pour gérer le défilement vers une ancre
export const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pagePath: string,
    targetId: string,
    handleGoAnchorClick: (targetId: string) => void
) => {
    e.preventDefault();
    const pathname = window.location.pathname;

    if (pathname === pagePath) {
        // Si on est déjà sur la bonne page, on défile directement vers l'ancre
        handleGoAnchorClick(targetId);
    } else {
        // Sinon, on redirige vers la page, mais sans recharger la page (router.push)
        window.location.href = `${pagePath}#${targetId}`;
    }
};
