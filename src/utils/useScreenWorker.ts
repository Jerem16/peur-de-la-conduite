import { useEffect } from "react";
import Cookies from "js-cookie";

function useScreenWorker() {
    useEffect(() => {
        console.log("🎯 useScreenWorker monté !");

        const sendScreenWidth = () => {
            const screenWidth = window.innerWidth;
            Cookies.set("screen-width", String(screenWidth), { path: "/" });

            fetch("/api/set-screen-width", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-screen-width": String(screenWidth),
                },
            });
        };

        sendScreenWidth();
        window.addEventListener("resize", sendScreenWidth);

        return () => {
            window.removeEventListener("resize", sendScreenWidth);
        };
    }, []);

    return null;
}

export default useScreenWorker;
