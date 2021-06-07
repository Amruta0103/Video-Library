import "./video.css"
import { useVideos } from "./videoContext";

export default function Video({ item }){
  const { save, setSave, like, setLike } = useVideos();
  // const [ openMenu, setOpenMenu ] = useState(true);
  return(
    <div className="Video">
      <div className="thumbnail-box" >
      <img src={item.image} className="thumbnail" alt="thumbnail"></img>
      <div className="duration-stamp">16:25</div>
      </div>
      <div className="info-box">
        <h2 className="description">{item.name}</h2>
        <p className="description" >abcdefghijklmnopqrstuvwxyz1234567891011</p>
        
        <div className="videoOptions">
          <button className="videoOptionButton" onClick={(save.find((items)=> items.id===item.id)) ? (()=>setSave((prev)=> prev.filter((items) => item !== items))) : (()=>setSave((items)=> [...items, item]))}>
            <span style={{width: "2rem"}}>{save.find((items)=> items.id===item.id) ?"Saved": "Save"}</span>
            <img className="videoOptionItemLogo" src={save.find((items)=> items.id===item.id) ? "./imageStocks/bookmark-solid.svg": "./imageStocks/bookmark-regular.svg"} alt="menu"></img>
          </button>
          
          <button className="videoOptionButton" onClick={(like.find((items)=> items.id===item.id)) ? (()=>setLike((prev)=> prev.filter((items) => item !== items))) : (()=>setLike((items)=> [...items, item]))}>
            <span style={{width: "2rem"}}>{like.find((items)=> items.id===item.id) ?"Liked": "Like"}</span>
            <img className="videoOptionItemLogo" src={like.find((items)=> items.id===item.id) ? "./imageStocks/heart-solid.svg" : "./imageStocks/heart-regular.svg"} alt="menu"></img>
          </button>
        </div>
      </div>
      {/* <div className="trial">
        <button onClick={()=>setOpen(prev => !prev )} className="menu">
          // <img className="videoOptionMenuLogo" src="./imageStocks/menu-dots-vertical.svg" alt="menu"></img>
        </button>
        <ul className={`videoOptions ${open ? "openMenu":""}`}>
          <li className="videoOptionItems">
            
          </li>
          <li className="videoOptionItem">
            
          </li>
        </ul>
      </div>   */}
    </div>
  );
}
<script src="videoMenuToggle.js"></script>