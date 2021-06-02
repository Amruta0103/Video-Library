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
      {/* <div>
        <img style={{ width: "1.5rem"}} src="./menu-dots-horizontal.svg" alt="menu"></img>
      </div> */}
    </div>
  );
}