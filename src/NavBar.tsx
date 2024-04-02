import { useEffect, useState } from "react";
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const NavBar = (): JSX.Element => {
    const breakpoint = 640;
    const [ isMobile, setIsMobile ] = useState( window.innerWidth < breakpoint );

    useEffect(() => {
        setIsMobile( window.innerWidth < breakpoint );
    }, [ window.innerWidth ]);

    return (
        <>
            {(isMobile) ? <NavBarMobile /> : <NavBarDesktop />}
        </>
    );
}

export default NavBar;
