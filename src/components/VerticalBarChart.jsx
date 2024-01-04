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
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
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
      //   title: {
      //     display: true,
      //     text: "Emission/Revenue (E_R)",
      //   },
      beginAtZero: true,
      ticks: {
        callback: (value) => `${value} co2e`,
      },
    },
  },
};

const allData2023 = [
  {
    Date: "16/1/23",
    Month: "Jan",
    Year: 2023,
    Supplier: "ABC Corp",
    Emissions: 200,
    Revenue: 56789,
    E_R: 21.5,
    MOM: "10%",
  },
  {
    Date: "16/2/23",
    Month: "Feb",
    Year: 2023,
    Supplier: "Adani",
    Emissions: 470,
    Revenue: 220000,
    E_R: 99.8,
    MOM: "25%",
  },
  {
    Date: "17/3/23",
    Month: "Mar",
    Year: 2023,
    Supplier: "Reliance",
    Emissions: 700,
    Revenue: 254815,
    E_R: 113.2,
    MOM: "28%",
  },
  {
    Date: "6/4/23",
    Month: "Apr",
    Year: 2023,
    Supplier: "Shaurya Drugs",
    Emissions: 250,
    Revenue: 879797,
    E_R: 194.6,
    MOM: "-11%",
  },
  {
    Date: "12/5/23",
    Month: "May",
    Year: 2023,
    Supplier: "Orlife Healthcare",
    Emissions: 290,
    Revenue: 464464,
    E_R: 54.5,
    MOM: "-67%",
  },
  {
    Date: "16/6/23",
    Month: "Jun",
    Year: 2023,
    Supplier: "XYZ Ltd",
    Emissions: 710,
    Revenue: 150000,
    E_R: 20.0,
    MOM: "-5%",
  },
  {
    Date: "18/7/23",
    Month: "Jul",
    Year: 2023,
    Supplier: "LMN Inc",
    Emissions: 880,
    Revenue: 200000,
    E_R: 20.0,
    MOM: "12%",
  },
  {
    Date: "11/8/23",
    Month: "Aug",
    Year: 2023,
    Supplier: "Rezicure Pharmaceuticals",
    Emissions: 640,
    Revenue: 548582,
    E_R: 488.1,
    MOM: "12%",
  },
  {
    Date: "8/9/23",
    Month: "Sep",
    Year: 2023,
    Supplier: "Ruzette Organics",
    Emissions: 490,
    Revenue: 564651,
    E_R: 71.9,
    MOM: "-58%",
  },
  {
    Date: "6/10/23",
    Month: "Oct",
    Year: 2023,
    Supplier: "Steller Bio Labs",
    Emissions: 190,
    Revenue: 516513,
    E_R: 114.2,
    MOM: "-20%",
  },

  {
    Date: "11/8/23",
    Month: "Nov",
    Year: 2023,
    Supplier: "Merion Care",
    Emissions: 600,
    Revenue: 565556,
    E_R: 107.6,
    MOM: "-5%",
  },
  {
    Date: "10/11/23",
    Month: "Dec",
    Year: 2023,
    Supplier: "Eskos Pharma",
    Emissions: 220,
    Revenue: 546561,
    E_R: 120.8,
    MOM: "20%",
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
    E_R: 18.8,
    MOM: "15%",
  },
  {
    Date: "18/2/22",
    Month: "Feb",
    Year: 2022,
    Supplier: "LMN Inc",
    Emissions: 595,
    Revenue: 90000,
    E_R: 20.0,
    MOM: "10%",
  },
  {
    Date: "22/3/22",
    Month: "Mar",
    Year: 2022,
    Supplier: "ABC Corp",
    Emissions: 900,
    Revenue: 75000,
    E_R: 18.0,
    MOM: "-8%",
  },
  {
    Date: "6/4/22",
    Month: "Apr",
    Year: 2022,
    Supplier: "XYZ Ltd",
    Emissions: 260,
    Revenue: 70000,
    E_R: 17.1,
    MOM: "5%",
  },
  {
    Date: "12/5/22",
    Month: "May",
    Year: 2022,
    Supplier: "PQR Ltd",
    Emissions: 290,
    Revenue: 85000,
    E_R: 20.0,
    MOM: "-12%",
  },
  {
    Date: "16/6/22",
    Month: "Jun",
    Year: 2022,
    Supplier: "LMN Inc",
    Emissions: 700,
    Revenue: 82000,
    E_R: 19.5,
    MOM: "8%",
  },
  {
    Date: "18/7/22",
    Month: "Jul",
    Year: 2022,
    Supplier: "ABC Corp",
    Emissions: 880,
    Revenue: 78000,
    E_R: 17.9,
    MOM: "-6%",
  },
  {
    Date: "11/8/22",
    Month: "Aug",
    Year: 2022,
    Supplier: "XYZ Ltd",
    Emissions: 645,
    Revenue: 100000,
    E_R: 20.0,
    MOM: "15%",
  },
  {
    Date: "8/9/22",
    Month: "Sep",
    Year: 2022,
    Supplier: "PQR Ltd",
    Emissions: 490,
    Revenue: 90000,
    E_R: 20.0,
    MOM: "10%",
  },
  {
    Date: "6/10/22",
    Month: "Oct",
    Year: 2022,
    Supplier: "LMN Inc",
    Emissions: 180,
    Revenue: 80000,
    E_R: 18.8,
    MOM: "-15%",
  },
  {
    Date: "11/11/22",
    Month: "Nov",
    Year: 2022,
    Supplier: "ABC Corp",
    Emissions: 600,
    Revenue: 82000,
    E_R: 19.5,
    MOM: "8%",
  },
  {
    Date: "10/12/22",
    Month: "Dec",
    Year: 2022,
    Supplier: "XYZ Ltd",
    Emissions: 210,
    Revenue: 85000,
    E_R: 20.0,
    MOM: "-12%",
  },
];

export const data = {
  labels: allData2023.map((data) => data.Month),
  datasets: [
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

function VerticalBarChart() {
  //   console.log(chartData);
  return (
    <div>
      <h1>Emission/Revenue</h1>
      <Bar data={data} options={options} />
    </div>
  );
}

export default VerticalBarChart;
