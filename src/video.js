import "./video.css"

export default function Video(){
  return(
    <div className="Video">
      <div className="thumbnail-box" >
      <img src="./imageStocks/Selfie.png" className="thumbnail" alt="thumbnail"></img>
      <div className="duration-stamp">16:25</div>
      </div>
      <div className="description">
        <h2>vid Name</h2>
        <p>description</p>
      </div>
      <div>
        <div className="menu">
          <img style={{width:"0.7rem"}} src="./imageStocks/menu-dots-vertical.svg" alt="menu"></img>
        </div>
        <div className="videoOptions">
          <div>Save Video <img style={{ width: "1rem"}} src="./imageStocks/bookmark-regular.svg" alt="menu"></img></div>
          <div>Liked<img style={{ width: "1rem"}} src="./imageStocks/heart-regular.svg" alt="menu"></img></div>
        </div>
      </div>
    </div>
  );
}