import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";

function Header () {
  return (
    <StyledHeader>
      <img src={process.env.PUBLIC_URL + '/images/ds-logo.png'} width='200' alt='Hanwha Design System' />
      <NavLink to='/foundation'>Foundation</NavLink>
      <NavLink to='/component'>Component</NavLink>
      <NavLink to='/guideline'>UX Guideline</NavLink>
    </StyledHeader>
  );
}

export default Header;