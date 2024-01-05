import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const allData2023 = [
    {
      Date: "16/1/23",
      Month: "Jan",
      Year: 2023,
      Supplier: "ABC Corp",
      Emissions: 200,
      Revenue: 56789,
      E_R: 1.5,
      MOM: "10%",
    },
    {
      Date: "16/2/23",
      Month: "Feb",
      Year: 2023,
      Supplier: "Adani",
      Emissions: 470,
      Revenue: 220000,
      E_R: 2.5,
      MOM: "25%",
    },
    {
      Date: "17/3/23",
      Month: "Mar",
      Year: 2023,
      Supplier: "Reliance",
      Emissions: 700,
      Revenue: 254815,
      E_R: 3,
      MOM: "28%",
    },
    {
      Date: "6/4/23",
      Month: "Apr",
      Year: 2023,
      Supplier: "Shaurya Drugs",
      Emissions: 250,
      Revenue: 879797,
      E_R: 4.7,
      MOM: "-11%",
    },
    {
      Date: "12/5/23",
      Month: "May",
      Year: 2023,
      Supplier: "Orlife Healthcare",
      Emissions: 290,
      Revenue: 464464,
      E_R: 6.5,
      MOM: "-67%",
    },
    {
      Date: "16/6/23",
      Month: "Jun",
      Year: 2023,
      Supplier: "XYZ Ltd",
      Emissions: 710,
      Revenue: 150000,
      E_R: 10,
      MOM: "-5%",
    },
    {
      Date: "18/7/23",
      Month: "Jul",
      Year: 2023,
      Supplier: "LMN Inc",
      Emissions: 880,
      Revenue: 200000,
      E_R: 21,
      MOM: "12%",
    },
    {
      Date: "11/8/23",
      Month: "Aug",
      Year: 2023,
      Supplier: "Rezicure Pharmaceuticals",
      Emissions: 640,
      Revenue: 548582,
      E_R: 23,
      MOM: "12%",
    },
    {
      Date: "8/9/23",
      Month: "Sep",
      Year: 2023,
      Supplier: "Ruzette Organics",
      Emissions: 490,
      Revenue: 564651,
      E_R: 23,
      MOM: "-58%",
    },
    {
      Date: "6/10/23",
      Month: "Oct",
      Year: 2023,
      Supplier: "Steller Bio Labs",
      Emissions: 190,
      Revenue: 516513,
      E_R: 16.5,
      MOM: "-20%",
    },

    {
      Date: "11/8/23",
      Month: "Nov",
      Year: 2023,
      Supplier: "Merion Care",
      Emissions: 600,
      Revenue: 565556,
      E_R: 12.5,
      MOM: "-5%",
    },
    {
      Date: "10/11/23",
      Month: "Dec",
      Year: 2023,
      Supplier: "Eskos Pharma",
      Emissions: 220,
      Revenue: 546561,
      E_R: 6.5,
      MOM: "20%",
    },
  ];

  const data = {
    labels: allData2023.map((data) => data.Supplier),
    datasets: [
      {
        label: "CO2e",
        data: allData2023.map((data) => data.Emissions),
        backgroundColor: [
          "#3BB85E",
          "#B54F69",
          "#FFC400",
          "#E994B1",
          "#7C95EA",
          "#544B8D",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#3BB85E",
          "#B54F69",
          "#FFC400",
          "#E994B1",
          "#7C95EA",
          "#544B8D",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      // tooltip: {
      // display: false,
      // callbacks: {
      //   label: function (context) {
      //     const labelIndex = context.dataIndex;
      //     console.log(allData2023[labelIndex].Supplier, ">>>>>");
      //     return `${allData2023[labelIndex].Supplier}: ${allData2023[labelIndex].Emissions} CO2e`;
      //   },
      // },
      // },
      datalabels: {
        display: true,
        color: "gray",
        font: {
          weight: "bold",
        },
        formatter: function (value, context) {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${value}`;
        },
        textAlign: "center",
        anchor: "end",
        offset: 10,
        clip: true,
      },
    },
  };

  return (
    <PieContainer>
      <div className="upperContainer">
        <p className="font">Emission by Supplier</p>
        <div className="rightContainer">
          <div style={{ padding: "6px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.38349 15.2661C7.38349 15.6716 7.05505 16 6.64954 16H0.733945C0.656881 16 0.581651 15.9872 0.510091 15.9651C0.489908 15.9578 0.469724 15.9505 0.449541 15.9413C0.429357 15.9339 0.411009 15.9248 0.394495 15.9156C0.372477 15.9046 0.352293 15.8936 0.33211 15.8789C0.311926 15.8661 0.291743 15.8514 0.27156 15.8349C0.19633 15.7743 0.135779 15.7009 0.0899079 15.6147C0.0788987 15.5982 0.0697245 15.5798 0.0642199 15.5596C0.0587153 15.5541 0.0550453 15.5468 0.0532105 15.5376C0.0440362 15.5174 0.0366969 15.4954 0.0311923 15.4752C0.0110088 15.4092 0 15.3394 0 15.2661V9.35046C0 8.94495 0.330275 8.61651 0.733945 8.61651C1.13945 8.61651 1.46789 8.94495 1.46789 9.35046V13.4954L5.66422 9.29725C5.95046 9.01101 6.41651 9.01101 6.70275 9.29725C6.98899 9.58348 6.98899 10.0477 6.70275 10.3358L2.50642 14.5321H6.64954C7.05505 14.5321 7.38349 14.8605 7.38349 15.2661ZM16 0.733945V6.64954C16 7.05505 15.6716 7.38349 15.2661 7.38349C14.8605 7.38349 14.5321 7.05505 14.5321 6.64954V2.50642L10.3358 6.70275C10.1927 6.84587 10.0037 6.91743 9.81651 6.91743C9.62936 6.91743 9.44037 6.84587 9.29725 6.70275C9.01101 6.41651 9.01101 5.95046 9.29725 5.66422L13.4936 1.46789H9.35046C8.94495 1.46789 8.61651 1.13945 8.61651 0.733945C8.61651 0.32844 8.94495 0 9.35046 0H15.2661C15.3174 0 15.367 0.00550422 15.4128 0.0146785C15.4367 0.0201831 15.4605 0.0256881 15.4844 0.0330276C15.5064 0.040367 15.5284 0.0477064 15.5505 0.0587155C15.7266 0.13211 15.8679 0.273394 15.9413 0.449541C15.9523 0.471559 15.9596 0.493577 15.967 0.515596C15.9743 0.539449 15.9798 0.563302 15.9853 0.587155C15.9945 0.633027 16 0.682569 16 0.733945Z"
                fill="white"
              />
              <path
                d="M7.38349 15.2661C7.38349 15.6716 7.05505 16 6.64954 16H0.733945C0.656881 16 0.581651 15.9872 0.510091 15.9651C0.489908 15.9578 0.469724 15.9505 0.449541 15.9413C0.429357 15.9339 0.411009 15.9248 0.394495 15.9156C0.372477 15.9046 0.352293 15.8936 0.33211 15.8789C0.311926 15.8661 0.291743 15.8514 0.27156 15.8349C0.19633 15.7743 0.135779 15.7009 0.0899079 15.6147C0.0788987 15.5982 0.0697245 15.5798 0.0642199 15.5596C0.0587153 15.5541 0.0550453 15.5468 0.0532105 15.5376C0.0440362 15.5174 0.0366969 15.4954 0.0311923 15.4752C0.0110088 15.4092 0 15.3394 0 15.2661V9.35046C0 8.94495 0.330275 8.61651 0.733945 8.61651C1.13945 8.61651 1.46789 8.94495 1.46789 9.35046V13.4954L5.66422 9.29725C5.95046 9.01101 6.41651 9.01101 6.70275 9.29725C6.98899 9.58348 6.98899 10.0477 6.70275 10.3358L2.50642 14.5321H6.64954C7.05505 14.5321 7.38349 14.8605 7.38349 15.2661ZM16 0.733945V6.64954C16 7.05505 15.6716 7.38349 15.2661 7.38349C14.8605 7.38349 14.5321 7.05505 14.5321 6.64954V2.50642L10.3358 6.70275C10.1927 6.84587 10.0037 6.91743 9.81651 6.91743C9.62936 6.91743 9.44037 6.84587 9.29725 6.70275C9.01101 6.41651 9.01101 5.95046 9.29725 5.66422L13.4936 1.46789H9.35046C8.94495 1.46789 8.61651 1.13945 8.61651 0.733945C8.61651 0.32844 8.94495 0 9.35046 0H15.2661C15.3174 0 15.367 0.00550422 15.4128 0.0146785C15.4367 0.0201831 15.4605 0.0256881 15.4844 0.0330276C15.5064 0.040367 15.5284 0.0477064 15.5505 0.0587155C15.7266 0.13211 15.8679 0.273394 15.9413 0.449541C15.9523 0.471559 15.9596 0.493577 15.967 0.515596C15.9743 0.539449 15.9798 0.563302 15.9853 0.587155C15.9945 0.633027 16 0.682569 16 0.733945Z"
                fill="black"
                fill-opacity="0.84"
              />
            </svg>
          </div>
          <div style={{ padding: "12px 6px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
            >
              <path
                d="M2 0C0.9 0 0 0.899976 0 1.99995C0 3.09992 0.9 3.9999 2 3.9999C3.1 3.9999 4 3.09992 4 1.99995C4 0.899976 3.1 0 2 0ZM14 0C12.9 0 12 0.899976 12 1.99995C12 3.09992 12.9 3.9999 14 3.9999C15.1 3.9999 16 3.09992 16 1.99995C16 0.899976 15.1 0 14 0ZM8 0C6.9 0 6 0.899976 6 1.99995C6 3.09992 6.9 3.9999 8 3.9999C9.1 3.9999 10 3.09992 10 1.99995C10 0.899976 9.1 0 8 0Z"
                fill="white"
              />
              <path
                d="M2 0C0.9 0 0 0.899976 0 1.99995C0 3.09992 0.9 3.9999 2 3.9999C3.1 3.9999 4 3.09992 4 1.99995C4 0.899976 3.1 0 2 0ZM14 0C12.9 0 12 0.899976 12 1.99995C12 3.09992 12.9 3.9999 14 3.9999C15.1 3.9999 16 3.09992 16 1.99995C16 0.899976 15.1 0 14 0ZM8 0C6.9 0 6 0.899976 6 1.99995C6 3.09992 6.9 3.9999 8 3.9999C9.1 3.9999 10 3.09992 10 1.99995C10 0.899976 9.1 0 8 0Z"
                fill="black"
                fill-opacity="0.84"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="lowerContainer">
        <div className="doughnut">
          <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
          {/* <Chart type="doughnut" data={data} options={options} /> */}
        </div>
      </div>
    </PieContainer>
  );
}

const PieContainer = styled.div`
  margin-top: 9px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  background: #fff;

  .upperContainer {
    display: flex;
    width: 459px;
    height: 64px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }

  .rightContainer {
    display: flex;
    height: 36px;
    padding: 6px 4px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-radius: 12px;
    border: 1px solid #ebebeb;
    background: #fff;
    box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.02),
      0px 2px 16px 0px rgba(0, 0, 0, 0.02), 0px 8px 80px 0px rgba(0, 0, 0, 0.04);
  }

  .font {
    color: #000000d6;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lowerContainer {
    margin-top: 20px;
    width: 100%;
    /* height: 166.406px; */
    display: flex;
    align-items: center;
    justify-content: center;

    .doughnut {
      width: 90%;
    }
  }
`;

export default PieChart;
