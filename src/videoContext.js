import { createContext, useContext, useState } from "react";

export const VideoContext = createContext();

export function VideoProvider({ children }){
  const [ like, setLike ] = useState([]);
  const [ save, setSave ] = useState([]);
  return(
    <VideoContext.Provider value={{like, setLike, save, setSave}}>
      { children}
    </VideoContext.Provider>
  );
}

export default function useVideos(){
  return useContext(VideoContext);
}