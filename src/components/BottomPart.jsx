import React from "react";
import styled from "styled-components";

function BottomPart() {
  return (
    <BottomContainer>
      <LeftPart>
        <p>Top 3 Suppliers contributing to Category-1</p>
        <div className="subContainer">
          <div className="innerContainer">
            <div
              style={{
                width: 12,
                height: 12,
                background: "#7C95EA",
                borderRadius: 16,
              }}
            />
            <div className="secondDiv">Supplier-1</div>
            <div className="thirdDiv">64%</div>
          </div>
          <div className="innerContainer">
            <div
              style={{
                width: 12,
                height: 12,
                background: "#FFC400",
                borderRadius: 16,
              }}
            />
            <div className="secondDiv">Supplier-2</div>
            <div className="thirdDiv">32%</div>
          </div>
          <div className="innerContainer">
            <div
              style={{
                width: 12,
                height: 12,
                background: "#3BB85E",
                borderRadius: 16,
              }}
            />
            <div className="secondDiv">Supplier-3</div>
            <div className="thirdDiv">15%</div>
          </div>
        </div>
      </LeftPart>
    </BottomContainer>
  );
}

const BottomContainer = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 17px;
`;

const LeftPart = styled.div`
  width: 460px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  background: #fff;

  p {
    display: flex;
    justify-content: flex-start;
    margin-top: 22px;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
  }

  .subContainer {
    display: flex;
    gap: 20px;
    margin: 20px 0 29px 20px;

    .innerContainer {
      display: flex;
      align-items: center;
      gap: 8px;

      .secondDiv {
        color: rgba(0, 0, 0, 0.48);
        text-align: center;
        font-family: HelveticaNeue;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
      }

      .thirdDiv {
        font-family: HelveticaNeue;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 123.321%;
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export default BottomPart;
