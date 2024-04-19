import Menu from "../Menu/Menu";


function SideBar(props){
  const {content} = props;

return (
  <div className="sidebarWrapper">            
    <Menu content={content}/>
    
  </div>
)
}
export default SideBar;