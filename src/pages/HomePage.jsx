import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Main from "../components/Main";

function HomePage() {
  return (
    <DIV
    //   className="flex"
    //   style={{
    //     width: "1440px",
    //     background:
    //       "linear-gradient(0deg, rgba(2, 171, 108, 0.04) 0%, rgba(2, 171, 108, 0.04) 100%), #FFF",
    //     height: "1354px",
    //     flexShrink: "0",
    //   }}
    >
      <Sidebar />
      <Main />
    </DIV>
  );
}

const DIV = styled.div`
  display: flex;
`;

export default HomePage;
