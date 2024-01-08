import React from "react";
import styled from "styled-components";

function Table({ allData2023 }) {
  const ColorForPercentage = ({ allData2023 }) => {
    return (
      <>
        {allData2023?.map((item, index) => {
          const textColor = item.MOM.includes("↑") ? "#FF0000D6" : "#008C58";

          const textStyle = { color: textColor };

          return (
            <TableRow key={index}>
              <TableCell>{item.Supplier}</TableCell>
              <TableCell>{item.Year}</TableCell>
              <TableCell>{item.E_R}</TableCell>
              <TableCell style={textStyle}>{item.MOM}</TableCell>
            </TableRow>
          );
        })}
      </>
    );
  };

  return (
    <DIV>
      <div className="upperContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="font" style={{ marginRight: "5px" }}>
            Supplier-wise
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
          >
            <path
              d="M10.4999 0C16.2991 0 20.9999 4.25315 20.9999 9.5C20.9999 14.7469 16.2991 19 10.4999 19C4.70077 19 -7.62939e-05 14.7469 -7.62939e-05 9.5C-7.62939e-05 4.25315 4.70077 0 10.4999 0ZM10.4999 1.9C8.2721 1.9 6.13553 2.70071 4.56023 4.12599C2.98492 5.55126 2.09992 7.48435 2.09992 9.5C2.09992 11.5156 2.98492 13.4487 4.56023 14.874C6.13553 16.2993 8.2721 17.1 10.4999 17.1C12.7277 17.1 14.8643 16.2993 16.4396 14.874C18.0149 13.4487 18.8999 11.5156 18.8999 9.5C18.8999 7.48435 18.0149 5.55126 16.4396 4.12599C14.8643 2.70071 12.7277 1.9 10.4999 1.9ZM10.4894 7.6C11.0753 7.6 11.5499 8.0294 11.5499 8.5595V13.4273C11.7501 13.5319 11.9065 13.6933 11.995 13.8865C12.0834 14.0797 12.0989 14.2939 12.0391 14.4959C11.9793 14.6979 11.8475 14.8764 11.6641 15.0037C11.4807 15.131 11.2561 15.2 11.0249 15.2H10.5104C10.3712 15.2 10.2333 15.1752 10.1046 15.127C9.97592 15.0787 9.85901 15.0081 9.76054 14.919C9.66206 14.8299 9.58394 14.7241 9.53065 14.6077C9.47735 14.4913 9.44992 14.3665 9.44992 14.2405V9.5C9.17145 9.5 8.90437 9.39991 8.70746 9.22175C8.51055 9.04359 8.39992 8.80196 8.39992 8.55C8.39992 8.29804 8.51055 8.05641 8.70746 7.87825C8.90437 7.70009 9.17145 7.6 9.44992 7.6H10.4894ZM10.4999 4.75C10.7784 4.75 11.0455 4.85009 11.2424 5.02825C11.4393 5.20641 11.5499 5.44804 11.5499 5.7C11.5499 5.95196 11.4393 6.19359 11.2424 6.37175C11.0455 6.54991 10.7784 6.65 10.4999 6.65C10.2214 6.65 9.95437 6.54991 9.75746 6.37175C9.56055 6.19359 9.44992 5.95196 9.44992 5.7C9.44992 5.44804 9.56055 5.20641 9.75746 5.02825C9.95437 4.85009 10.2214 4.75 10.4999 4.75Z"
              fill="black"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <div className="rightContainer">
          <div
            style={{
              display: "flex",
              width: "32px",
              height: "32px",
              padding: "9px 8px,",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
            >
              <path
                d="M8.67498 0.5H3.77498L0.0999756 4.1V11.3C0.0999756 11.96 0.651226 12.5 1.32498 12.5H8.67498C9.34873 12.5 9.89998 11.96 9.89998 11.3V1.7C9.89998 1.04 9.34873 0.5 8.67498 0.5ZM4.99998 9.5L2.54998 7.1H4.38748V4.712L5.61248 4.7V7.1H7.44998L4.99998 9.5Z"
                fill="#02AB6C"
              />
            </svg>
          </div>
          <div
            style={{
              width: "1px",
              height: "16px",
              background:
                "linear-gradient(0deg, rgba(2, 171, 108, 0.16) 0%, rgba(2, 171, 108, 0.16) 100%), #FFF",
            }}
          ></div>
          <div style={{ padding: "12px 6px" }}>
            <p className="font">Download</p>
          </div>
        </div>
      </div>
      <TableContainer>
        <Table1>
          <thead>
            <TableRow>
              <TableHeader>SUPPLIER</TableHeader>
              <TableHeader>YEAR</TableHeader>
              <TableHeader>EMISSION/REVENUE RATIO</TableHeader>
              <TableHeader>MOM</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {/* {allData2023?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Supplier}</TableCell>
                <TableCell>{item.Year}</TableCell>
                <TableCell>{item.E_R}</TableCell>
                <TableCell style={textStyle}>{item.MOM}</TableCell>
              </TableRow>
            ))} */}
            <ColorForPercentage allData2023={allData2023} />
          </tbody>
        </Table1>
      </TableContainer>
    </DIV>
  );
}

const TableContainer = styled.div``;

const Table1 = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableRow = styled.tr`
  color: #0000007a;
  /* font-family: HelveticaNeue; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px 16px;
  width: 158px;
  height: 38px;
  color: black;
  font-size: 14px;
`;

const DIV = styled.div`
  border-radius: 12px 12px 0px 0px;
  border: 1px solid #ebebeb;
  background: #fff;
  margin-left: 10px;

  .upperContainer {
    display: flex;
    /* width: 459px; */
    /* height: 64px; */
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }

  .rightContainer {
    display: flex;
    width: 111.646px;
    height: 27px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #fff;
    background: #fff;
    box-shadow: 0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01),
      0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01),
      0px 9px 80px 0px rgba(0, 0, 0, 0.02);
  }

  .font {
    color: #000000d6;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default Table;
