// ScrollSectionsWrapper.js

"use client";

import React from "react";
import { useScrollAnchors } from "../src/utils/scrollUtils";
import { sections } from "../src/assets/data/sections";

const ScrollSectionsWrapper = ({ children }) => {
    useScrollAnchors(sections);
    return <>{children}</>;
};

export default ScrollSectionsWrapper;
