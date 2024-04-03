import { useEffect, useState } from "react";
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const BREAKPOINT = 640;
const NavBar = (): JSX.Element => {
    const [ isMobile, setIsMobile ] = useState( window.innerWidth < BREAKPOINT );

    const handleResize = () => {
        setIsMobile( window.innerWidth < BREAKPOINT );
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <>
            {(isMobile) ? <NavBarMobile /> : <NavBarDesktop />}
        </>
    );
}

export default NavBar;
