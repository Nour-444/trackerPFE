import { GiProgression } from "react-icons/gi";

function TopBar(props) {
    return (
        <div className="topBarWrapper">
            <div className="logoAndTitle">
                <span className="title">
                    <GiProgression size={50} />
                    <span><strong>Tracker</strong></span>
                </span>
            </div>
            <div className="searchBox-wrapper">
                <input className="searchBox"
                    type="text"
                    placeholder="Search..."
                    //onChange={(e) => props.handleSearch(e.target.value)}
                />
            </div>
            <div className="userProfile">
                <span className="username">ns{props.user}</span>
            </div>
        </div>
    );
}

export default TopBar;
