// "use client";

// import React from "react";
// import { MenuItem } from "../../../assets/data/menuItems";
// import SubMenu from "../SubMenu";
// import RenderLink from "../RenderLink";
// import { svgComponents } from "../svgComponents";
// import { getContainerClass } from "../menuUtils";

// interface NavLinkShowProps {
//     menuItem: MenuItem;
//     onNavigationClick: (path: string) => void;
//     isOpen: boolean;
//     showNavLinks: boolean;
//     handleMenuClick: (menuItemId: string) => void;
//     onMenuToggle: (
//         menuItemId: string,
//         event?: React.MouseEvent | React.KeyboardEvent
//     ) => void;
//     openButton: boolean;
//     openMainButton: boolean;
//     onMouseEnter: () => void;
//     onFocus: () => void;
// }

// const NavLinkShow: React.FC<NavLinkShowProps> = ({
//     menuItem,
//     onNavigationClick,
//     isOpen,
//     showNavLinks,
//     handleMenuClick,
//     onMenuToggle,
//     openButton,
//     openMainButton,
//     onMouseEnter,
//     onFocus,
// }) => {
//     const SvgIcon = svgComponents[menuItem.svg];

//     /**
//      * Gestion des sous-menus.
//      */
//     const renderSubMenu = () =>
//         menuItem.subItems?.length ? (
//             <SubMenu
//                 menuItem={menuItem}
//                 isOpen={isOpen}
//                 onSubItemClick={onNavigationClick}
//             />
//         ) : null;

//     /**
//      * Gestionnaire pour les événements `onClick` et `onKeyDown`.
//      */
//     const handleInteraction = (
//         event: React.MouseEvent | React.KeyboardEvent
//     ) => {
//         event.preventDefault();
//         onMenuToggle(menuItem.id, event);
//     };

//     /**
//      * Gestion des rôles et attributs ARIA.
//      */
//     const role = openButton || !openMainButton ? "menubar" : "";
//     const ariaLabel = `ouvrir le menu ${menuItem.title}`;

//     return (
//         <div
//             className={getContainerClass(
//                 menuItem.id,
//                 showNavLinks,
//                 openButton,
//                 openMainButton
//             )}
//             role={role}
//             aria-label={ariaLabel}
//             tabIndex={0}
//             onClick={handleInteraction}
//             onKeyDown={(e) => {
//                 if (["Enter", " "].includes(e.key)) {
//                     handleInteraction(e);
//                 }
//             }}
//             onMouseEnter={onMouseEnter}
//             onFocus={onFocus}
//         >
//             <RenderLink
//                 menuItem={menuItem}
//                 onNavigationClick={onNavigationClick}
//                 isOpen={isOpen}
//                 showNavLinks={showNavLinks}
//                 handleMenuClick={handleMenuClick}
//                 onMenuToggle={onMenuToggle}
//                 openButton={openButton}
//                 openMainButton={openMainButton}
//                 onMouseEnter={onMouseEnter}
//                 onFocus={onFocus}
//             />
//             {renderSubMenu()}
//         </div>
//     );
// };

// export default NavLinkShow;
