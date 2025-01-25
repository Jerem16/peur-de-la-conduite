import React from "react";
import { MenuItem } from "../../../assets/data/menuItems";
import SubResult from "./SubResult";
import useSearchHandler from "./useSearchHandler";
import { useRouter } from "next/navigation";
import { getShowGroupClass } from "../utils/menuUtils";
import RenderInput from "./RenderInput";

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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (["Enter", " "].includes(e.key)) {
            e.preventDefault();
            onMenuToggle(menuItem.id, e);
        }
    };

    const renderSubResult = () =>
        showNavLinks &&
        isSubResultOpen &&
        query && (
            <SubResult
                suggestions={suggestions}
                isOpen={isOpen}
                onSuggestionClick={handleSuggestionClick}
            />
        );

    return (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menuitem"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={(e) => onMenuToggle(menuItem.id, e)}
            onKeyDown={handleKeyDown}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
            <form
                aria-label={`Page ${menuItem.title}`}
                className="head-link"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <RenderInput
                    query={query}
                    menuItem={menuItem}
                    placeholder={placeholder}
                    showNavLinks={showNavLinks}
                    onFocus={onFocus}
                    handleSearch={handleSearch}
                    handleSubmit={handleSubmit}
                    isSubmitted={isSubmitted} // Ajouter cette prop
                    handleReset={handleReset} // Ajouter cette prop
                />
            </form>
            {renderSubResult()}
        </div>
    );
};

export default NavInput;
