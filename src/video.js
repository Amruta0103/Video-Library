import "./video.css"
import { useState } from "react";
import { VideoContext } from "./videoContext";

export default function Video({ item }){
  const { save, setSave, like, setLike } = VideoContext();
  const [ openMenu, setOpenMenu ] = useState(true);
  const handleToggle = () => {
    setOpenMenu(prev => !prev)
  }
  return(
    <div className="Video">
      <div className="thumbnail-box" >
      <img src={item.image} className="thumbnail" alt="thumbnail"></img>
      <div className="duration-stamp">16:25</div>
      </div>
      <div className="info-box">
        <h2 className="description">{item.name}</h2>
        <p className="description" >abcdefghijklmnopqrstuvwxyz1234567891011</p>
      </div>
      <div className="trial">
        <button onClick={()=>handleToggle()} className="menu">
          <img className="videoOptionMenuLogo" src="./imageStocks/menu-dots-vertical.svg" alt="menu"></img>
        </button>
        <ul className={`videoOptions ${openMenu ? "openMenu":""}`}>
          <li onClick={(save.find((items)=> items.id===item.id)) ? 
              (()=>setSave((prev)=> prev.filter((items) => item !== items))) : 
              (()=>setSave((items)=> [...items, item]))} className="videoOptionItems"><span>Save</span><img className="videoOptionItemLogo" src="./imageStocks/bookmark-regular.svg" alt="menu"></img></li>
          
          <li onClick={(like.find((items)=> items.id===item.id)) ? 
              (()=>setLike((prev)=> prev.filter((items) => item !== items))) : 
              (()=>setLike((items)=> [...items, item]))} className="videoOptionItem"><span style={{margin:"auto"}}>Like</span><img className="videoOptionItemLogo" src="./imageStocks/heart-regular.svg" alt="menu"></img></li>
        </ul>
      </div>  
    </div>
  );
}
<script src="videoMenuToggle.js"></script>