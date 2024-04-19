import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { IoHomeOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";


function Menu(props){
    const {content} = props;
 
return (
    <div className="menuWrapper">  

        <div className="navigation">

        <ul>
            <li>
            <a href="/">
       <span className="title"><IoHomeOutline  size={30}/>  <span>Home</span></span>
                </a>
                </li>  
                        <li >
                            <a href="/Dashboard">
                            <span className="title"><FaChartPie size={30}/><span>Dashboard</span></span>
                            </a>
                        </li> 
                        <li>
                            <a href="/Board">
                            <span className="title"><FaClipboardList size={30}/><span>Board</span> </span>
                            </a>
                        </li> 
                        <li>
                            <a href="/Team">
                            <span className="title"><AiOutlineTeam size={30}/> <span>Team</span> </span>
                            </a>
                        </li>
                        <li>
                            <a href="/Projects">
                            <span className="title"><FaFolderOpen size={30} /> <span>Projects</span> </span>
                            </a>
                            
                        </li>
                        <li>
                            <a href="/Tasks">
                            <span className="title"><FaTasks size={30} /> <span>Tasks</span> </span>
                            </a>
                            </li>
                            <li>
                            <a href="/Login">
                            <span className="title"><FiLogIn size={30} /> <span>Log in</span> </span>
                            </a>
                            </li>

        </ul>
    </div>
    </div>
);
}
export default Menu;