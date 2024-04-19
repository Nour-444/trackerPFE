function AssignedToMe(props){
    const {content} = props;
  return (
    <div className="AssignedToMeWrapper">
        Assigned To Me
       { content.map((issueItems, index) => {
        return (
          <div className="card">
              <div className="card-header">
            {issueItems.projectName}
            </div>
            <div className  ="card-body">
                <span>  {issueItems.taskName}</span>
                <div className="assigneeCircleWrapper"><span className="assigneeCircle">{issueItems.assigneeInitial}</span></div>
              <div>Due date {issueItems.DueDate}</div>
            </div>
          </div>
        )
        })
               }   
    </div>
  )
  }
  export default AssignedToMe;