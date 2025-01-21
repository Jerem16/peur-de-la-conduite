import React from "react";
import "./button.scss";

const Button = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <button className="btn-style_blue">{children}</button>;
};

export default Button;
