import { Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { UserData } from "./UserData.js";
Chart.register(CategoryScale);

function PieChart(props){
    const {content} = props;
    const data = {
        datasets: [{
           data: [300, 50, 100],
           backgroundColor: [
             'rgb(137, 102, 192)',
             'rgb(218, 102, 192)',
             'rgb(240, 196, 85)'
           ],
           hoverOffset: 4
         }], 
       
         labels: [
        'To Do',
        'In Progress',
        'Done',
       ],
       options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
              display: true,
              text: 'Pie Chart'
            }
          }
       }
       };
  
  return (
    <div className="PieChartWrapper">
  < Pie
    width={100}
    height={400}
  data={data}
  options={data.options}

/>
    </div>
  )
  }
  export default PieChart;



