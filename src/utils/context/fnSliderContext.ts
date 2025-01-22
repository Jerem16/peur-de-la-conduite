export const classGetter = (
    index: number,
    currentSlide: number,
    prevValue: number,
    nextValue: number
): string => {
    if (index === currentSlide) {
        return "active";
    } else if (index === prevValue) {
        return "prev";
    } else if (index === nextValue) {
        return "next";
    } else {
        return "";
    }
};

export const handleSlideRefParam = (
    slideRefParam: string | null,
    sliderContent: { slideRef: string | number }[],
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>
) => {
    if (slideRefParam) {
        setStopTimerButton(true);
        const index = sliderContent.findIndex(
            (item) => String(item.slideRef) === slideRefParam
        );
        if (index !== -1) {
            setCurrentSlide(index);
        }
    }
};
export const manageAutoSlide = (
    stopTimerButton: boolean,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    sliderContentLength: number,
    intervalTime: number = 4000
) => {
    if (stopTimerButton) {
        return () => {};
    }

    const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => {
            if (prev < sliderContentLength - 1) {
                return prev + 1;
            }
            clearInterval(slideInterval);
            return prev;
        });
    }, intervalTime);

    const stopTimeout = setTimeout(() => {
        clearInterval(slideInterval);
        setStopTimerButton(true);
    }, intervalTime * sliderContentLength);

    return () => {
        clearInterval(slideInterval);
        clearTimeout(stopTimeout);
    };
};
