function MyWork(props){
    const {content} = props;
  
  return (
    <div className="MyWorkWrapper">

<table className="table"> 
      <tbody>
      <tr  className="success">
              <td className="issueName">
          Out of Deadline
              </td>
              <td className="issueStatus">
                20
            </td>
          </tr>
          <tr  className="success">
              <td className="issueName">
          Pending
              </td>
              <td className="issueStatus">
                10
            </td>
          </tr>

          </tbody>
  </table>
    </div>
  )
  }
  export default MyWork;