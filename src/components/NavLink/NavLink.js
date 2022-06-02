import { Container } from "./NavLink.style";
import { NavLink as NavItem } from "react-router-dom";

const NavLink = ({children}) => {
    return ( 
        <Container>
            <NavItem to={`/${children}`} className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'} >
                {children}
            </NavItem>
        </Container>
     );
}
 
export default NavLink;