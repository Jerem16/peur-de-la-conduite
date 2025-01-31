"use client";
import React from "react";
import dynamic from "next/dynamic";
import MapQuestions from "./mapContactQuestions";

import { useDriving } from "../../../utils/context/DrivingContext";

const ContactQuestions: React.FC = () => {
    const {
        locationState,
        setLocationState,
        hasPermit,
        supervisedDriving,
        setHasPermit,
        setSupervisedDriving,
    } = useDriving();
    return (
        <MapQuestions
            locationState={locationState}
            hasPermit={hasPermit}
            supervisedDriving={supervisedDriving}
            onLocationChange={setLocationState}
            onPermitChange={setHasPermit}
            onSupervisedChange={setSupervisedDriving}
        />
    );
};

export default dynamic(() => Promise.resolve(ContactQuestions), { ssr: false });
