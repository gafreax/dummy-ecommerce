import React, { useEffect, useState } from "react";
import { HeaderProps } from "./index.types.js";
import HeaderMobile from "./HeaderMobile/index.tsx";
import HeaderDesktop from "./HeaderDesktop/index.tsx";

const getIsMobile = () => window.innerWidth <= 768

const Header = ({
    link,
    linkTitle,
    linkType,
    setSearchText,
    showSearch,
}: HeaderProps) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(getIsMobile());

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        setIsMobile(getIsMobile());
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, [width]);

    if(isMobile) {
        return <HeaderMobile link={link} linkTitle={linkTitle} linkType={linkType} setSearchText={setSearchText} showSearch={showSearch} /> 
    }
    return <HeaderDesktop link={link} linkTitle={linkTitle} linkType={linkType} setSearchText={setSearchText} showSearch={showSearch} />;
};

export default Header;
