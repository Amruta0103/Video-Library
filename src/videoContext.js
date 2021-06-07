import { createContext, useContext, useState } from "react";

export const VideoContext = createContext();

export function VideoProvider({ children }){
  const [ like, setLike ] = useState([]);
  const [ save, setSave ] = useState([]);
  const [ watch, setWatch] = useState([]);
  return(
    <VideoContext.Provider value={{like, setLike, save, setSave, watch, setWatch}}>
      { children}
    </VideoContext.Provider>
  );
}

export function useVideos(){
  return useContext(VideoContext);
}