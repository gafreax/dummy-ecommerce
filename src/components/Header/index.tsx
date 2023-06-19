import React, { useEffect, useState } from "react";
import HeaderType from "./HeaderType/index.tsx";

const getIsMobile = () => window.innerWidth <= 768


const Header = () => {
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
       
        return <HeaderType  /> 
    }
    return <HeaderType  />;
}

export default Header;
