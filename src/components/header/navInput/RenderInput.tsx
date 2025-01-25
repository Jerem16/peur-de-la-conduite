import React from "react";
import RenderInputButton from "./RenderInputButton";
import HiddenDelayComponent from "../utils/HiddenDelayComponent";
import { getShowClass } from "../utils/menuUtils";
import { MenuItem } from "../../../assets/data/interfaces/menu";
interface RenderInputProps {
    isSubmitted: boolean;
    showNavLinks: boolean;
    menuItem: MenuItem;
    handleSubmit: (
        e?:
            | React.FormEvent<HTMLFormElement>
            | React.KeyboardEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => void;
    handleReset: () => void;
    query: string;
    placeholder?: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
}

const RenderInput: React.FC<RenderInputProps> = ({
    isSubmitted,
    showNavLinks,
    menuItem,
    handleSubmit,
    handleReset,
    query,
    placeholder = "Rechercher...",
    handleSearch,
    onFocus,
}) => {
    return (
        <>
            <RenderInputButton
                isSubmitted={isSubmitted}
                showNavLinks={showNavLinks}
                menuItem={menuItem}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
            />
            <HiddenDelayComponent isVisible={showNavLinks} delay={450}>
                {(isHidden) =>
                    !isHidden && (
                        <input
                            id="search-input"
                            type="text"
                            value={query}
                            placeholder={placeholder}
                            onChange={handleSearch}
                            onFocus={onFocus}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSubmit(
                                        e as React.KeyboardEvent<
                                            HTMLInputElement
                                        >
                                    );
                                }
                            }}
                            className={`nav-link ${getShowClass(
                                showNavLinks
                            )} ${isHidden ? "display-none" : ""}`}
                        />
                    )
                }
            </HiddenDelayComponent>
        </>
    );
};

export default RenderInput;
