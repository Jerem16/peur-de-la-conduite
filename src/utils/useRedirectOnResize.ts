// "use client";
// import { useEffect } from "react";

// export default function useRedirectOnResize() {
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const handleResize = () => {
//                 const screenWidth = window.innerWidth;
//                 sessionStorage.setItem("screen_width", String(screenWidth));

//                 // ✅ Redirige immédiatement sans attendre le middleware
//                 if (
//                     screenWidth <= 768 &&
//                     !window.location.hostname.startsWith("m.")
//                 ) {
//                     window.location.href = `https://m.peur-de-la-conduite.fr${window.location.pathname}`;
//                 } else if (
//                     screenWidth > 768 &&
//                     window.location.hostname.startsWith("m.")
//                 ) {
//                     window.location.href = `https://peur-de-la-conduite.fr${window.location.pathname}`;
//                 }
//             };

//             handleResize(); // Vérifie au chargement
//             window.addEventListener("resize", handleResize);

//             return () => window.removeEventListener("resize", handleResize);
//         }
//     }, []);
// }
