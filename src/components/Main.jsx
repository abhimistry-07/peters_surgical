import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import PurchasedSection from "./PurchasedSection";
import VerticalBarChart from "./VerticalBarChart";
import BottomPart from "./BottomPart";
// import { DateRange } from "react-date-range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";

const allData2023 = [
  {
    Date: "16/1/23",
    Month: "Jan",
    Year: 2023,
    Supplier: "ABC Corp",
    Emissions: 200,
    Revenue: 56789,
    E_R: 1.5,
    MOM: "10%↑",
  },
  {
    Date: "16/2/23",
    Month: "Feb",
    Year: 2023,
    Supplier: "Adani",
    Emissions: 470,
    Revenue: 220000,
    E_R: 2.5,
    MOM: "25%↓",
  },
  {
    Date: "17/3/23",
    Month: "Mar",
    Year: 2023,
    Supplier: "Reliance",
    Emissions: 700,
    Revenue: 254815,
    E_R: 3,
    MOM: "28%↑",
  },
  {
    Date: "6/4/23",
    Month: "Apr",
    Year: 2023,
    Supplier: "Shaurya Drugs",
    Emissions: 250,
    Revenue: 879797,
    E_R: 4.7,
    MOM: "-11%↓",
  },
  {
    Date: "12/5/23",
    Month: "May",
    Year: 2023,
    Supplier: "Orlife",
    Emissions: 290,
    Revenue: 464464,
    E_R: 6.5,
    MOM: "-67%↓",
  },
  {
    Date: "16/6/23",
    Month: "Jun",
    Year: 2023,
    Supplier: "XYZ Ltd",
    Emissions: 710,
    Revenue: 150000,
    E_R: 10,
    MOM: "-5%↑",
  },
  {
    Date: "18/7/23",
    Month: "Jul",
    Year: 2023,
    Supplier: "LMN Inc",
    Emissions: 880,
    Revenue: 200000,
    E_R: 21,
    MOM: "12%↓",
  },
  {
    Date: "11/8/23",
    Month: "Aug",
    Year: 2023,
    Supplier: "Tata",
    Emissions: 640,
    Revenue: 548582,
    E_R: 23,
    MOM: "12%↑",
  },
  {
    Date: "8/9/23",
    Month: "Sep",
    Year: 2023,
    Supplier: "Ruzette",
    Emissions: 490,
    Revenue: 564651,
    E_R: 23,
    MOM: "-58%↓",
  },
  {
    Date: "6/10/23",
    Month: "Oct",
    Year: 2023,
    Supplier: "Alibaba",
    Emissions: 190,
    Revenue: 516513,
    E_R: 16.5,
    MOM: "-20%↑",
  },

  {
    Date: "11/8/23",
    Month: "Nov",
    Year: 2023,
    Supplier: "Merion Care",
    Emissions: 600,
    Revenue: 565556,
    E_R: 12.5,
    MOM: "-5%↓",
  },
  {
    Date: "10/11/23",
    Month: "Dec",
    Year: 2023,
    Supplier: "Eskos Pharma",
    Emissions: 220,
    Revenue: 546561,
    E_R: 6.5,
    MOM: "20%↑",
  },
];

const allData2022 = [
  {
    Date: "16/1/22",
    Month: "Jan",
    Year: 2022,
    Supplier: "PQR Ltd",
    Emissions: 260,
    Revenue: 80000,
    E_R: 1.5,
    MOM: "15%↑",
  },
  {
    Date: "18/2/22",
    Month: "Feb",
    Year: 2022,
    Supplier: "LMN Inc",
    Emissions: 595,
    Revenue: 90000,
    E_R: 2.8,
    MOM: "10%↑",
  },
  {
    Date: "22/3/22",
    Month: "Mar",
    Year: 2022,
    Supplier: "ABC Corp",
    Emissions: 900,
    Revenue: 75000,
    E_R: 3,
    MOM: "-8%",
  },
  {
    Date: "6/4/22",
    Month: "Apr",
    Year: 2022,
    Supplier: "XYZ Ltd",
    Emissions: 260,
    Revenue: 70000,
    E_R: 5,
    MOM: "5%↑",
  },
  {
    Date: "12/5/22",
    Month: "May",
    Year: 2022,
    Supplier: "PQR Ltd",
    Emissions: 290,
    Revenue: 85000,
    E_R: 6,
    MOM: "-12%",
  },
  {
    Date: "16/6/22",
    Month: "Jun",
    Year: 2022,
    Supplier: "LMN Inc",
    Emissions: 700,
    Revenue: 82000,
    E_R: 9,
    MOM: "8%",
  },
  {
    Date: "18/7/22",
    Month: "Jul",
    Year: 2022,
    Supplier: "ABC Corp",
    Emissions: 880,
    Revenue: 78000,
    E_R: 18,
    MOM: "-6%↑",
  },
  {
    Date: "11/8/22",
    Month: "Aug",
    Year: 2022,
    Supplier: "XYZ Ltd",
    Emissions: 645,
    Revenue: 100000,
    E_R: 24.8,
    MOM: "15%",
  },
  {
    Date: "8/9/22",
    Month: "Sep",
    Year: 2022,
    Supplier: "PQR Ltd",
    Emissions: 490,
    Revenue: 90000,
    E_R: 24,
    MOM: "10%↑",
  },
  {
    Date: "6/10/22",
    Month: "Oct",
    Year: 2022,
    Supplier: "LMN Inc",
    Emissions: 180,
    Revenue: 80000,
    E_R: 18.5,
    MOM: "-15%",
  },
  {
    Date: "11/11/22",
    Month: "Nov",
    Year: 2022,
    Supplier: "ABC Corp",
    Emissions: 600,
    Revenue: 82000,
    E_R: 14,
    MOM: "8%",
  },
  {
    Date: "10/12/22",
    Month: "Dec",
    Year: 2022,
    Supplier: "XYZ Ltd",
    Emissions: 210,
    Revenue: 85000,
    E_R: 8,
    MOM: "-12%↑",
  },
];

function Main() {
  const defaultStartDate = new Date("2023-03-01");
  const defaultEndDate = new Date("2023-04-30");
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [showDatePickers, setShowDatePickers] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  // const allData2023 = useSelector((store) => store.data2023);

  // console.log(allData2023, ">>>>>>>");

  const dispatch = useDispatch();

  const handleDateChange = (date, isStartDate) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const handleSpanClick = () => {
    setShowDatePickers((prev) => !prev);
  };

  const filterDataByDate = () => {
    if (startDate && endDate) {
      const data = allData2023.filter((item) => {
        const itemData = new Date(item.Date);
        return itemData >= startDate && itemData <= endDate;
      });
      setFilteredData(data);
    }
  };
  // console.log(filteredData, ">>>>>>>>>");

  // useEffect(() => {
  //   // dispatch(getData());
  //   // filterDataByDate();
  // }, [startDate, endDate, allData2023]);

  return (
    <div>
      <Navbar />
      <DATE>
        <div className="innerDiv">
          <p>
            Show Tline:
            {/* <span>Mar’23 - Apr’23</span> */}
            <span>
              {startDate
                ? `${startDate.toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                  })} - ${
                    endDate
                      ? endDate.toLocaleDateString("en-US", {
                          month: "short",
                          year: "2-digit",
                        })
                      : "Present"
                  }`
                : ""}
            </span>
          </p>
          <div className="line"></div>
          <svg
            onClick={handleSpanClick}
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
          >
            <path
              d="M2.90573 5.00001L0.305725 2.40001C-0.0109418 2.08335 -0.0816084 1.72101 0.093725 1.31301C0.269058 0.905012 0.581392 0.700679 1.03073 0.700012H6.18072C6.63072 0.700012 6.94339 0.904345 7.11872 1.31301C7.29406 1.72168 7.22306 2.08401 6.90573 2.40001L4.30572 5.00001C4.20572 5.10001 4.09739 5.17501 3.98073 5.22501C3.86406 5.27501 3.73906 5.30001 3.60573 5.30001C3.47239 5.30001 3.34739 5.27501 3.23073 5.22501C3.11406 5.17501 3.00573 5.10001 2.90573 5.00001Z"
              fill="black"
              fillOpacity="0.84"
            />
          </svg>
        </div>
        <div>
          {showDatePickers && (
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => handleDateChange(date, true)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => handleDateChange(date, false)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
              />
            </div>
          )}
        </div>
      </DATE>
      <PurchasedSection />
      <VerticalBarChart allData2022={allData2022} allData2023={allData2023} />
      <BottomPart allData2023={allData2023} />
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
