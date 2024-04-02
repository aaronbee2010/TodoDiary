import { useEffect, useState } from "react";
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const BREAKPOINT = 640;
const NavBar = (): JSX.Element => {
    const [ isMobile, setIsMobile ] = useState( window.innerWidth < BREAKPOINT );

    useEffect(() => {
        setIsMobile( window.innerWidth < BREAKPOINT );
    }, [ window.innerWidth ]);

    return (
        <>
            {(isMobile) ? <NavBarMobile /> : <NavBarDesktop />}
        </>
    );
}

export default NavBar;
