import React from "react";

const Button = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <button className="btn-style_blue flx-c">{children}</button>;
};

export default Button;
