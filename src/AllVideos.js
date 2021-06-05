import Video from "./video"; 
import { data } from "./tempData";

export default function AllVideos(){
  return(
    <div className="allVideos">
      {data.map((item)=>{
        return <Video key={item.id} item={item} />
      })}
    </div>
  );
}