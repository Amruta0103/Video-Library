import "./video.css"
import { useState } from "react";

export default function Video(){
  const [ openMenu, setOpenMenu ] = useState(true);
  const handleToggle = () => {
    setOpenMenu(prev => !prev)
  }
  return(
    <div className="Video">
      <div className="thumbnail-box" >
      <img src="./imageStocks/Selfie.png" className="thumbnail" alt="thumbnail"></img>
      <div className="duration-stamp">16:25</div>
      </div>
      <div className="info-box">
        <h2> Video Title</h2>
        <p className="description" >abcdefghijklmnopqrstuvwxyz1234567891011</p>
      </div>
      <div className="trial">
        <button onClick={()=>handleToggle()} className="menu">
          <img className="videoOptionMenuLogo" src="./imageStocks/menu-dots-vertical.svg" alt="menu"></img>
        </button>
        <ul className={`videoOptions ${openMenu ? "openMenu":""}`}>
          <li className="videoOptionItems"><span>Save</span><img className="videoOptionItemLogo" src="./imageStocks/bookmark-regular.svg" alt="menu"></img></li>
          
          <li className="videoOptionItem"><span style={{margin:"auto"}}>Like</span><img className="videoOptionItemLogo" src="./imageStocks/heart-regular.svg" alt="menu"></img></li>
        </ul>
      </div>  
    </div>
  );
}
<script src="videoMenuToggle.js"></script>