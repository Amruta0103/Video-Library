import { useVideos } from "./videoContext";

export default function Liked(){
  const { save, setSave, like, setLike, watch, setWatch } = useVideos();
  return(
    <div className="Liked">
      {save.map((item) => (
        <div className="Video">
          <div className="thumbnail-box">
          <img src={item.image} className="thumbnail" alt="thumbnail"></img>
          <div className="duration-stamp">16:25</div>
          </div>
          <div className="info-box">
            <div>
              <h2 className="description">{item.name}</h2>
              <p className="description">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </div>
            <div className="videoOptions">
              <button className="videoOptionButton" onClick={(save.find((items)=> items.id===item.id)) ? (()=>setSave((prev)=> prev.filter((items) => item !== items))) : (()=>setSave((items)=> [...items, item]))}>
                <span style={{width: "2rem"}}>{save.find((items)=> items.id===item.id) ?"Saved": "Save"}</span>
                <img className="videoOptionItemLogo" src={save.find((items)=> items.id===item.id) ? "./imageStocks/bookmark-solid.svg": "./imageStocks/bookmark-regular.svg"} alt="menu"></img>
              </button>
              <button className="videoOptionButton" onClick={(like.find((items)=> items.id===item.id)) ? (()=>setLike((prev)=> prev.filter((items) => item !== items))) : (()=>setLike((items)=> [...items, item]))}>
                <span style={{width: "2rem"}}>{like.find((items)=> items.id===item.id) ?"Liked": "Like"}</span>
                <img className="videoOptionItemLogo" src={like.find((items)=> items.id===item.id) ? "./imageStocks/heart-solid.svg" : "./imageStocks/heart-regular.svg"} alt="menu"></img>
              </button>
              <button className="videoOptionButton" onClick={(watch.find((items)=> items.id===item.id)) ? (()=>setWatch((prev)=> prev.filter((items) => item !== items))) : (()=>setWatch((items)=> [...items, item]))}>
                <span style={{width: "2rem"}}>{watch.find((items)=> items.id===item.id) ?"Added": "Watch Later"}</span>
                <img className="videoOptionItemLogo" src={watch.find((items)=> items.id===item.id) ? "./imageStocks/clock-solid.svg" : "./imageStocks/clock-regular.svg"} alt="menu"></img>
              </button>
            </div>
          </div>  
        </div>
      ))}
    </div>
  );
}