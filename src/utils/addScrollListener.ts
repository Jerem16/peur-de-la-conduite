type ScrollHandler = (params: { scrollY: number }) => void;

export const addScrollListener = (handler: ScrollHandler, on?: boolean) => {
    const onScroll = () => {
        handler({ scrollY: window.scrollY });
    };

    if (!on) {
        console.log("on", on);
        window.addEventListener("scroll", onScroll);
    }

    return () => {
        window.removeEventListener("scroll", onScroll);
    };
};
