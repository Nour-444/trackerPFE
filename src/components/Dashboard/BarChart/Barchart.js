import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

Chart.register(CategoryScale);

function Barchart(props){
    const {content} = props;

  
  return (
    <div className="BarchartWrapper">
  < Bar
  width={100}
  height={400}
  data={content.data}
  options={content.options}
/>
    </div>
  )
  }
  export default Barchart;



