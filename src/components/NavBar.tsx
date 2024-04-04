import { useEffect, useState } from "react";
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

const BREAKPOINT = 640;
const NavBar = ({showNotifications, setShowNotifications}: {showNotifications: boolean, setShowNotifications: any}): JSX.Element => {
    
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
            {(isMobile) ? <NavBarMobile /> : <NavBarDesktop showNotifications={showNotifications} setShowNotifications={setShowNotifications} />}
        </>
    );
}

export default NavBar;
