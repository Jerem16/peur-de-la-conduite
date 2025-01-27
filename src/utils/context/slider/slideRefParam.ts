

export const slideRefParam = (
    slideRefParam: string | null,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    sliderContent: { slideRef: string | number }[],
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
    if (slideRefParam) {
        setStopTimerButton(true);
        const index = sliderContent.findIndex(
            (item) => String(item.slideRef) === slideRefParam
        );
        if (index !== -1) {
            setCurrentSlide(Number(slideRefParam));
        }
    }
    return [setStopTimerButton, sliderContent, setCurrentSlide];
};
