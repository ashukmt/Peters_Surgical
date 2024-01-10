import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";

function Chart() {
  const [cartHeight, setCartHeight] = useState(400);
  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: [1202,1500,2000,4027,5050,9023,2222,5890,3094,9758,8943,6787],
    },
    {
      name: "R/E",
      type: "line",
      data: [40,65,39,75,12,85,98,23,57,34,59,75],
    },
    {
      name: "R/E-2022",
      type: "line",
      data: [32,45,75,57,34,67,76,23,76,30,56,23],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: cartHeight,
      type: "line",
    },
    stroke: {
      width: [0, 2],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],

    yaxis: [
      {
        title: {
          text: "Emissions",
        },
      },
      {
        opposite: true,
        title: {
          text: "R/E",
        },
      },
    ],
  });
  
  useEffect(() => {
    setSeries([
      {
        name: "Emissions-2023",
        type: "column",
        data: [8457,3455,6576,3544,1234,9765,8765,2344,8675,2442,8766,1987],
      },
      {
        name: "Emissions-2022",
        type: "column",
        data: [5435,8678,2422,7686,8766,4656,2225,7876,3076,9658,4443,3787],
      },
      {
        name: "R/E-2023",
        type: "line",
        data: [31,15,35,57,54,34,86,23,76,30,97,93],
      },
      {
        name: "R/E-2022",
        type: "line",
        data: [42,95,76,59,30,61,86,53,96,20,36,99],
      },
    ]);
  }, []);

  return (
    <div className="char_div">
      <ReactApexChart
        className="chart_opt"
        options={options}
        series={series}
        type="line"
        height={cartHeight}
      />
    </div>
  );
}

export default Chart;