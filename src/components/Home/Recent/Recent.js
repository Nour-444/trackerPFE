function Recent(props){
    const {content} = props;
   return (
    <div className="RecentWrapper">
     <table className="table"> 
     
     <thead>
        <tr>
          <th>Task Name</th>
          <th>Status</th>          
        </tr>
      </thead>
      <tbody>
      {
    content.map((issueItems, index) => {
        return (
          <tr key={index} class="success">
              <td className="issueName">
           {issueItems.issueName}
              </td>
              <td className="issueStatus">
                {issueItems.issueStatus}
            </td>
          </tr>
        )
    })
  }
  </tbody>
  </table>
 
    </div>
  )
  }
  export default Recent;