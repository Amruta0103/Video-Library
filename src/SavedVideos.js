import { useState } from "react";
import { useVideos } from "./videoContext";

export default function Liked(){
  const { save, setSave, like, setLike } = useVideos();
  const [ openMenu, setOpenMenu ] = useState(true);
  const handleToggle = () => {
    setOpenMenu(prev => !prev)
  }
  return(
    <div className="Liked">
      {save.map((item) => (
        <div className="Video">
          <div className="thumbnail-box">
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
            <li className="videoOptionItems">
              <button onClick={(save.find((items)=> items.id===item.id)) ? (()=>setSave((prev)=> prev.filter((items) => item !== items))) : (()=>setSave((items)=> [...items, item]))} className="videoOptionButton">
                {save.find((items)=> items.id===item.id) ?"Saved": "Save"}
                <img className="videoOptionItemLogo" src={save.find((items)=> items.id===item.id) ?"./imageStocks/bookmark-solid.svg": "./imageStocks/bookmark-regular.svg"} alt="menu"></img>
              </button>
            </li>
            <li className="videoOptionItem">
              <button onClick={(like.find((items)=> items.id===item.id)) ? (()=>setLike((prev)=> prev.filter((items) => item !== items))) : (()=>setLike((items)=> [...items, item]))} className="videoOptionButton">
                {like.find((items)=> items.id===item.id) ? "Liked" : "Like"}
                <img className="videoOptionItemLogo" src={like.find((items)=> items.id===item.id) ? "./imageStocks/heart-solid.svg": "./imageStocks/heart-regular.svg"} alt="menu"></img>
              </button>
            </li>
            </ul>
          </div>  
        </div>
      ))}
    </div>
  );
}