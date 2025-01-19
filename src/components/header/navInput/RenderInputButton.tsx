
import React from "react";
import { svgComponents } from "../svgComponents";
import SearchClose from "../../svg_Icon/SearchClose";

interface RenderButtonProps {
    isSubmitted: boolean;
    showNavLinks: boolean;
    menuItem: { svg: string };
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleReset: () => void;
}

const RenderInputButton: React.FC<RenderButtonProps> = ({
    isSubmitted,
    showNavLinks,
    menuItem,
    handleSubmit,
    handleReset,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];
    const handleClick = isSubmitted ? handleReset : handleSubmit;

    if (!showNavLinks) return SvgIcon ? <SvgIcon /> : null;

    return (
        <button
            type={isSubmitted ? "button" : "submit"}
            className="nav-icon"
            onClick={handleClick}
            aria-label={
                isSubmitted
                    ? "Réinitialiser la recherche"
                    : "Valider la recherche"
            }
        >
            {isSubmitted ? <SearchClose /> : SvgIcon && <SvgIcon />}
        </button>
    );
};

export default React.memo(RenderInputButton);
