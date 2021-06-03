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
      <div class="trial">
        <div className="menu">
          <img style={{width:"0.7rem"}} src="./imageStocks/menu-dots-vertical.svg" alt="menu"></img>
        </div>
        <ul className="videoOptions">
          <li className="videoOptionItem"><span style={{margin:"auto"}}>Save</span><img style={{ width: "1rem", margin:"auto"}} src="./imageStocks/bookmark-regular.svg" alt="menu"></img></li>
          <li className="videoOptionItem"><span style={{margin:"auto"}}>Like</span><img style={{ width: "1rem", margin:"auto"}} src="./imageStocks/heart-regular.svg" alt="menu"></img></li>
        </ul>
      </div>
    </div>
  );
}