import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <StNavLink to="/">🏠Home</StNavLink>
      <StNavLink to="/info">ℹ️ Info</StNavLink>
    </nav>
  );
};

export default Navbar;

const StNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
