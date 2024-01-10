import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function Chart({num1}) {
  console.log(num1)
  const [cartHeight] = useState(400);
  const[emission2022,setEmission2022] = useState([])
  
  let num = num1;
  useEffect(()=>{
   if(num == 3){
    var emm22 = [1202,1500,2000,4027,5050,9023,2222,5890,3094,9758,8943,6787]
    setEmission2022(emm22)
   }
   else if(num == 6){
    var emm22 = [4202,1563,3500,8667,5440,9035,5322,2390,4294,9518,1243,3277]
    setEmission2022(emm22)
   }
   else if(num == 9){
    var emm22 = [9035,5322,2390,4202,1563,3500,8667,5440,4294,9518,1243,3277]
    setEmission2022(emm22)
   }
   else{
    var emm22 = [4294,9518,1243,3277,8035,2322,4390,4202,1563,3500,8667,5440]
    setEmission2022(emm22)
   }
  },[num])
  console.log(emission2022)
  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: emission2022
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

  const [options] = useState({
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
        data: emission2022
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
  }, [emission2022]);

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