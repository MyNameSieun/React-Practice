import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <StLayout>
      <StContainer>
        <Navbar />
        <Outlet />
      </StContainer>
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.main`
  width: 100%;
  height: 100vh;
`;

const StContainer = styled.div`
  width: 80%;
  background-color: #dfdfdf;
  margin: auto;
`;
