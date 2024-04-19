import Recent from "./Recent/Recent";
import AssignedToMe from "./AssignedToMe/AssignedToMe";
import MyWork from "./MyWork/MyWork";
import { IoHomeOutline } from "react-icons/io5";

function Home(props){
  const {content} = props;
  const recentIssue =  
    [{
    "issueName": "dev",
    "issueStatus":"Done"
    },
    {
      "issueName": "Review",
      "issueStatus":"In progress"
      },
  ]
  const assignedToMe = 
  [{
    "projectName": "dev1",
    "taskName":"bug css",
    "assigneeInitial":"ns",
    "DueDate":"20/12/24"
    },
    {
      "projectName": "dev2",
      "taskName":"bug php",
      "assigneeInitial":"ns",
      "DueDate":"20/12/24"
      },
  ]
return (
  <div className="board"><h4><strong>Home <IoHomeOutline size={40} />
  </strong></h4>
  <div className="homeWrapper">
    <div className="row">
    <div className="col-md-4">
    <Recent content={recentIssue}/>
    </div>
    <div className="col-md-8">
        <MyWork/>
        </div>
        <div className="col-md-12">
     <AssignedToMe content={assignedToMe}/>
        </div>
    </div>
    </div>
</div>
  
)
}
export default Home;