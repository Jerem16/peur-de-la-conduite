"use client";
import { useEffect } from "react";
// import Cookies from "js-cookie";

function useScreenWorker() {
    useEffect(() => {
        const sendScreenWidth = () => {
            fetch("/api/set-screen-width", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-screen-width": String(window.innerWidth),
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
