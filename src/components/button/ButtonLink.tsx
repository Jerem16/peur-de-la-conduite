import React from "react";
import "./button.scss";
import Link from "next/link";

const ButtonLink = ({
    children,
    href,
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) => {
    return (
        <Link className="bt-style_blue" href={href}>
            {children}
        </Link>
    );
};

export default ButtonLink;
