import React from "react";

interface SubResultProps {
    suggestions: string[];
    isOpen: boolean;
    onSuggestionClick: (suggestion: string) => void;
}

const SubResult: React.FC<SubResultProps> = ({
    suggestions,
    isOpen,
    onSuggestionClick,
}) => {
    if (!suggestions || suggestions.length === 0) return null;

    return (
        <div className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {suggestions.map((suggestion) => (
                    <option
                        key={suggestion}
                        aria-label={`Suggestion: ${suggestion}`}
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            onSuggestionClick(suggestion); // Appelle la méthode depuis NavInput
                        }}
                    >
                        {suggestion}
                    </option>
                ))}
            </div>
        </div>
    );
};

export default SubResult;
