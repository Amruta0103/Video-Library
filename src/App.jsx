import './App.css';
import Liked from "./likedVideos";
import Saved from "./SavedVideos";
import WatchLater from "./WatchLaterVideos";
import AllVideos from './AllVideos';

function App() {
  return(
    <div className="App">
      <nav className="nav">
        <div className="logo-box">
          <img className="logo" src="./favicon.ico" alt="logo"></img>
          <h1>my vid lib</h1>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-option" >BROWSE</div>
          <div className="nav-menu-option" >WATCH LATER</div>
          <div className="nav-menu-option" >SAVED</div>
          <div className="nav-menu-option" >LIKED</div>
        </div>
      </nav>
      <Liked />
      <Saved />
      <WatchLater />
      <AllVideos />
    </div>
  );
}

export default App;
