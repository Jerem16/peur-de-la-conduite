// ScrollSectionsWrapper.js

"use client";

import React from "react";
// import { useScrollAnchors } from "../src/utils/scrollUtils";
// import { sections } from "../src/assets/data/sections";
import useScreenWorker from "../src/utils/useScreenWorker";

const ScreenWorkerWrapper = ({ children }) => {
    useScreenWorker();
    return <>{children}</>;
};

export default ScreenWorkerWrapper;
