import { useState } from "react";

const useToggle = (initialValue: boolean | null = null) => {
    const [value, setValue] = useState<boolean | null>(initialValue);

    const toggle = (newValue: boolean) => {
        setValue((prevValue) => (prevValue === newValue ? null : newValue));
    };

    return [value, toggle] as const;
};

export default useToggle;
