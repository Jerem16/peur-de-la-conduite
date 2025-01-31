// Services.tsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import DrivingData from "./dataQuestions/drivingDataQuestions";
import { useDriving } from "../../../utils/context/DrivingContext";

const DriveQuestions: React.FC = () => {
    const {
        hasPermit,
        supervisedDriving,
        setHasPermit,
        setSupervisedDriving,
    } = useDriving();
    return (
        <DrivingData
            hasPermit={hasPermit}
            supervisedDriving={supervisedDriving}
            onPermitChange={setHasPermit}
            onSupervisedChange={setSupervisedDriving}
        />
    );
};

export default dynamic(() => Promise.resolve(DriveQuestions), { ssr: false });
