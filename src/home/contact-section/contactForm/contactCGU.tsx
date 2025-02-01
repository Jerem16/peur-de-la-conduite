"use client";
import React from "react";
import dynamic from "next/dynamic";
import MapQuestions from "./mapCGU";

import { useDriving } from "../../../utils/context/DrivingContext";

const ContactCGU: React.FC = () => {
    const {
        cguState,
        setCguChange,
        newEvent,
        setNewEventChange,
    } = useDriving();
    return (
        <MapQuestions
            cguState={cguState}
            onCguChange={setCguChange}
            newEvent={newEvent}
            onNewEventChange={setNewEventChange}
        />
    );
};

export default dynamic(() => Promise.resolve(ContactCGU), { ssr: false });
