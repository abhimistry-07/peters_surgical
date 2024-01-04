import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import PurchasedSection from "./PurchasedSection";
import VerticalBarChart from "./VerticalBarChart";

const data = [
  {
    Date: "16/2/23",
    Month: "Feb",
    Year: 2023,
    Supplier: "Adani",
    Emissions: 2205,
    Revenue: 220000,
    E_R: 99.8,
    MOM: "25%",
  },
  {
    Date: "17/3/23",
    Month: "Mar",
    Year: 2023,
    Supplier: "Reliance",
    Emissions: 2251,
    Revenue: 254815,
    E_R: 113.2,
    MOM: "28%",
  },
  {
    Date: "6/4/23",
    Month: "Apr",
    Year: 2023,
    Supplier: "Shaurya Drugs",
    Emissions: 4522,
    Revenue: 879797,
    E_R: 194.6,
    MOM: "-11%",
  },
  {
    Date: "12/5/23",
    Month: "May",
    Year: 2023,
    Supplier: "Orlife Healthcare",
    Emissions: 8522,
    Revenue: 464464,
    E_R: 54.5,
    MOM: "-67%",
  },
  {
    Date: "11/8/23",
    Month: "Aug",
    Year: 2023,
    Supplier: "Rezicure Pharmaceuticals",
    Emissions: 1124,
    Revenue: 548582,
    E_R: 488.1,
    MOM: "12%",
  },
  {
    Date: "6/10/23",
    Month: "Oct",
    Year: 2023,
    Supplier: "Steller Bio Labs",
    Emissions: 4524,
    Revenue: 516513,
    E_R: 114.2,
    MOM: "-20%",
  },
  {
    Date: "8/9/23",
    Month: "Sep",
    Year: 2023,
    Supplier: "Ruzette Organics",
    Emissions: 7858,
    Revenue: 564651,
    E_R: 71.9,
    MOM: "-58%",
  },
  {
    Date: "11/8/23",
    Month: "Aug",
    Year: 2023,
    Supplier: "Merion Care",
    Emissions: 5258,
    Revenue: 565556,
    E_R: 107.6,
    MOM: "-5%",
  },
  {
    Date: "10/11/23",
    Month: "Nov",
    Year: 2023,
    Supplier: "Eskos Pharma",
    Emissions: 4524,
    Revenue: 546561,
    E_R: 120.8,
    MOM: "20%",
  },
];

function Main() {
  return (
    <div>
      <Navbar />
      <DATE>
        <div className="innerDiv">
          <p>
            Show Tline:
            <span>Mar’23 - Apr’23</span>
          </p>
          <div className="line"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
          >
            <path
              d="M2.90573 5.00001L0.305725 2.40001C-0.0109418 2.08335 -0.0816084 1.72101 0.093725 1.31301C0.269058 0.905012 0.581392 0.700679 1.03073 0.700012H6.18072C6.63072 0.700012 6.94339 0.904345 7.11872 1.31301C7.29406 1.72168 7.22306 2.08401 6.90573 2.40001L4.30572 5.00001C4.20572 5.10001 4.09739 5.17501 3.98073 5.22501C3.86406 5.27501 3.73906 5.30001 3.60573 5.30001C3.47239 5.30001 3.34739 5.27501 3.23073 5.22501C3.11406 5.17501 3.00573 5.10001 2.90573 5.00001Z"
              fill="black"
              fill-opacity="0.84"
            />
          </svg>
        </div>
      </DATE>
      <PurchasedSection />
      <VerticalBarChart />
    </div>
  );
}

const DATE = styled.div`
  margin-left: 895px;
  margin-top: 24px;
  height: 32px;
  box-shadow: 0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01),
    0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01),
    0px 9px 80px 0px rgba(0, 0, 0, 0.02);

  .innerDiv {
    display: flex;
    height: 32px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: max-content;
    border: 1px solid #02ab6c;
    border-radius: 8px;

    p {
      color: #0000007a;
      font-family: HelveticaNeue;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      span {
        color: #02ab6c;
      }
    }

    .line {
      width: 1px;
      height: 16px;
      background: linear-gradient(0deg, #02ab6c 0%, #02ab6c 100%), #fff;
    }
  }
`;

export default Main;
