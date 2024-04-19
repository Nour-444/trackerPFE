import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";


Chart.register(CategoryScale);

function TimeChart(props){
    const {content} = props;
     const options = {
      responsive: true,
      plugins: {
        maintainAspectRatio: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Time Tracking Chart',
        },
      },
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
     const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'to do',
          data: [20,50,15,10,20,22,10],
          borderColor: 'rgb(240, 196, 85)',
          backgroundColor: 'rgb(240, 196, 85)',
        },
        {
          fill: true,
          label: 'in progress',
          data: [30,60,20,15,20,50,5],
          borderColor: 'rgb(218, 102, 192)',
          backgroundColor: 'rgb(218, 102, 192)',
        },
        {
          fill: true,
          label: 'done',
          data: [40,70,30,25,30,60,15],
          borderColor: 'rgb(137, 102, 192)',
          backgroundColor: 'rgb(137, 102, 192)',
        },
      ],
    }
  
  return (
    <div className="PieChartWrapper">
<Line 
 width={50}
 height={40}
options={options} 
data={data} />
    </div>
  )
  }
  export default TimeChart;



