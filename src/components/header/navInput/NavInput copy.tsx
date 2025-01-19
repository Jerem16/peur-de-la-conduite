"use client";

import React from "react";
import { MenuItem } from "../../../assets/data/menuItems";
import SubResult from "./SubResult";
import useSearchHandler from "./useSearchHandler";
import { useRouter } from "next/navigation";
import RenderInputButton from "./RenderInputButton";
import HiddenDelayComponent from "../HiddenDelayComponent";
import { getShowGroupClass, getShowClass } from "../menuUtils";

interface NavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    isOpen: boolean;
    showNavLinks: boolean;
    onMenuToggle: (
        menuItemId: string,
        event?: React.MouseEvent | React.KeyboardEvent
    ) => void;
    onMouseEnter: () => void;
    onFocus: () => void;
}

const NavInput: React.FC<NavInputProps> = ({
    placeholder = "Rechercher...",
    menuItem,
    isOpen,
    showNavLinks,
    onMenuToggle,
    onMouseEnter,
    onFocus,
}) => {
    const router = useRouter();
    const {
        query,
        suggestions,
        isSubmitted,
        isSubResultOpen,
        handleSearch,
        handleSubmit,
        handleReset,
        handleSuggestionClick,
    } = useSearchHandler(router);

    return (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menuitem"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={(e) => onMenuToggle(menuItem.id, e)}
            onKeyDown={(e) => {
                if (["Enter", " "].includes(e.key)) {
                    e.preventDefault();
                    onMenuToggle(menuItem.id, e);
                }
            }}
            onMouseEnter={onMouseEnter} // Passer l'événement onMouseEnter
            onFocus={onFocus} // Passer l'événement onFocus
        >
            <form
                aria-label={`Page ${menuItem.title}`}
                className="head-link"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <RenderInputButton
                    isSubmitted={isSubmitted}
                    showNavLinks={showNavLinks}
                    menuItem={menuItem}
                    handleSubmit={handleSubmit}
                    handleReset={handleReset}
                />
                <HiddenDelayComponent isVisible={showNavLinks} delay={450}>
                    {(isHidden) => {
                        return isHidden ? null : (
                            <input
                                id="search-input"
                                type="text"
                                value={query}
                                placeholder={placeholder}
                                onChange={handleSearch}
                                onFocus={onFocus}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSubmit(
                                            (e as unknown) as React.FormEvent<
                                                HTMLFormElement
                                            >
                                        );
                                    }
                                }}
                                className={`nav-link ${getShowClass(
                                    showNavLinks
                                )} ${isHidden ? "display-none" : ""}`}
                            />
                        );
                    }}
                </HiddenDelayComponent>
            </form>
            {showNavLinks && isSubResultOpen && query && (
                <SubResult
                    suggestions={suggestions}
                    isOpen={isOpen}
                    onSuggestionClick={handleSuggestionClick}
                />
            )}
        </div>
    );
};

export default NavInput;
