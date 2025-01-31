// Services.tsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import Beginner from "./beginner/beginner";
import Confirmed from "./confirmed/confirmed";
import { useDriving } from "../../utils/context/DrivingContext";


const PermitStatus: React.FC = () => {
    const {
        hasPermit,
    } = useDriving();
    return hasPermit ? <Confirmed /> : <Beginner />;
};

export default dynamic(() => Promise.resolve(PermitStatus), { ssr: false });

