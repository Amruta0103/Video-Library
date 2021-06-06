import './App.css';
import Liked from "./likedVideos";
import Saved from "./SavedVideos";
import WatchLater from "./WatchLaterVideos";
import AllVideos from './AllVideos';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return(
    <div className="App">
      <nav className="nav">
        <div className="logo-box">
          <img className="logo" src="./imageStocks/favicon.ico" alt="logo"></img>
          <h1>my vid lib</h1>
        </div>
        <div className="nav-menu">
          <Link to="/" ><button className="nav-menu-option">BROWSE</button></Link>
          <Link to="/watchLater" ><button className="nav-menu-option">WATCH LATER</button></Link>
          <Link to="/savedVideos" ><button className="nav-menu-option">SAVED</button></Link>
          <Link to="/likedVideos" ><button className="nav-menu-option">LIKED</button></Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<AllVideos />} />
        <Route path="/likedVideos" element={<Liked />} />
        <Route path="/savedVideos" element={<Saved />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}

export default App;
