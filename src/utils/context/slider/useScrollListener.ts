// useScrollListener.ts
import { useEffect } from "react";
import { addScrollListener } from "../../addScrollListener";

export const useScrollListener = (
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    stopTimerButton: boolean
) => {
    useEffect(() => {
        const removeListener = addScrollListener(({ scrollY }) => {
            setStopTimerButton(scrollY > 5);
        }, stopTimerButton);

        return () => {
            removeListener();
        };
    }, [setStopTimerButton, stopTimerButton]);
};