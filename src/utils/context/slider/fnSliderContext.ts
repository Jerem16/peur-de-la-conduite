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

/*-------------------------------------------------------*/

export const sessionSlideRef = (
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
    const savedSlideRef = sessionStorage.getItem("slideRef");
    if (savedSlideRef !== null && !isNaN(Number(savedSlideRef))) {
        const slideRefNumber = Number(savedSlideRef);
        setCurrentSlide(slideRefNumber);
    }
};

/*-------------------------------------------------------*/

const startSlideInterval = (
    sliderContentLength: number,
    intervalTime: number,
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
    return setInterval(() => {
        setCurrentSlide((prev) => {
            if (prev < sliderContentLength - 1) {
                return prev + 1;
            }
            return prev;
        });
    }, intervalTime);
};
const startStopTimeout = (
    slideInterval: NodeJS.Timeout,
    intervalTime: number,
    sliderContentLength: number,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>
) => {
    return setTimeout(() => {
        clearInterval(slideInterval);
        setStopTimerButton(true);
    }, intervalTime * sliderContentLength);
};
export const manageAutoSlide = (
    stopTimerButton: boolean,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    sliderContentLength: number,
    intervalTime: number = 4000
) => {
    const savedSlideRef = sessionStorage.getItem("slideRef");
    if (
        stopTimerButton ||
        (savedSlideRef !== null && !isNaN(Number(savedSlideRef)))
    ) {
        return () => {};
    }
    const slideInterval = startSlideInterval(
        sliderContentLength,
        intervalTime,
        setCurrentSlide
    );
    const stopTimeout = startStopTimeout(
        slideInterval,
        intervalTime,
        sliderContentLength,
        setStopTimerButton
    );
    return () => {
        clearInterval(slideInterval);
        clearTimeout(stopTimeout);
    };
};
/*-------------------------------------------------------*/
