import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function VerticalBarChart({ allData2023, allData2022 }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
          text: "Emission",
        },
        beginAtZero: true,
        position: "left",
        ticks: {
          callback: (value) => `${value} co2e`,
        },
        max: 1000,
      },
      y1: {
        title: {
          display: false,
          text: "Emission/Revenue (E_R)",
        },
        beginAtZero: true,
        position: "right",
        max: 25,
      },
    },
  };

  const data = {
    labels: allData2023.map((data) => data.Month),
    datasets: [
      {
        label: "E/R-2023",
        data: allData2023.map((data) => data.E_R),
        backgroundColor: "yellow",
        type: "line",
        borderColor: "yellow",
        yAxisID: "y1",
      },
      {
        label: "E/R-2022",
        data: allData2022.map((data) => data.E_R),
        backgroundColor: "red",
        type: "line",
        borderColor: "red",
        yAxisID: "y1",
      },
      {
        label: "Emissions 2023",
        data: allData2023.map((data) => data.Emissions),
        backgroundColor: "#5470C6",
      },
      {
        label: "Emissions 2022",
        data: allData2022.map((data) => data.Emissions),
        backgroundColor: "#91CC75",
      },
    ],
  };

  return (
    <Container>
      <div>
        <h1>Emission/Revenue</h1>
      </div>
      <Bar className="bar" data={data} options={options} />
    </Container>
  );
}

const Container = styled.div`
  width: 1005px;
  /* height: 521px; */
  flex-shrink: 0;
  margin-left: 30px;
  margin-top: 13px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  background: #fff;
  box-shadow: 0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01),
    0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01),
    0px 9px 80px 0px rgba(0, 0, 0, 0.02);

  div {
    display: flex;
    /* border: 1px solid red; */
    padding: 20px 0px 10px 20px;
    
  }

  /* .bar {
    width: 979px;
    height: 458px;
    flex-shrink: 0;
  } */
`;

export default VerticalBarChart;
