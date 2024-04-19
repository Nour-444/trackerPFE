import Barchart from "./BarChart/Barchart";
import PieChart from "./PieChart/PieChart";
import TimeChart from "./TimeChart/TimeChart";
import { UserData } from "./UserData.js";
import { FaChartBar } from "react-icons/fa";

function Dashboard(props){
    const bardata = {
        data: {
          labels: ["Nour","Slim","John","Mahmoud","Afef"],
          datasets: [
            {
              label: 'Users Done Tasks',
              backgroundColor: 'rgb(218, 102, 192)',
              borderColor: 'rgb(0, 255, 0)',
              borderWidth: 1,
              data: [30,25,15,10,5]
            }
          ]
        },
        options: {
         maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Bar Chart'
            }
          }
        }
      };
return (
  <div className="board"><h4><strong>Dashboards <FaChartBar size={40} />
  </strong></h4>
    <div>
        <div className="row">
        <div className="col-md-6">
          <div className="dash"> <Barchart content={bardata}></Barchart></div>
        
            </div>   
        <div className="col-md-6">
          <div className="dash"> <PieChart content={bardata}/></div>
        
            </div>    
        </div>
        <div className="col-md-6">
        <div className="dash" ><TimeChart /></div>
           
        </div>
       
      
    </div>
    </div>
);
}
export default Dashboard;