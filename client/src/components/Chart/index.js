import React, { useEffect, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./ChartAdmin.css";
Chart.register(...registerables);

// [
//   {
//     Plan_Name: "Giảm thiểu nhân viên",
//     TONG: 2,
//   },
//   {
//     Plan_Name: "Nhân viên mới",
//     TONG: 3,
//   },
//   {
//     Plan_Name: "Tăng ca làm",
//     TONG: 2,
//   },
// ];

const ChartAdmin = ({ statistic = { labels: [], data: [] } }) => {
  // console.log(statistic);
  const chartData = {
    labels: statistic.labels,

    datasets: [
      {
        label: "Iphone sales",
        data: statistic.data,
        maxBarThickness: 50,
        fill: true,
        backgroundColor: "#6160DC",
        pointBorderColor: "#8884d8",
        borderRadius: "3000",
        pointBorderWidth: 5,
        borderRadius: 40,
        tension: 0.4,
        font: {
          size: "12",
        },
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false } },
    layout: { padding: { bottom: 100 } },
    scales: {
      y: {
        ticks: {
          color: "#2e4355",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(75, 192, 192, 0.2)",
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          color: "#2e4355",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="chart-layout">
      <h2 className="text-center mb-4 text-info">Statistic benefit plan</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartAdmin;
