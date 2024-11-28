import Rescard from "./Rescart";
import reslist from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
    
//body
const Body=()=>{
    const [listres,setlistres]=useState([]);
    const [searchText,setsearchText]=useState("");

    useEffect(()=>{
      fetchdata();
      
    },[]);
    // function to fetch data from swiggy api
    
    const fetchdata=async()=>{
       
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630");
      
      const json=await data.json();
      console.log(json);
      console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(json);
      
    };

    if(listres.length===0) {
      return <Shimmer/>
    }

    return (
      <div className="body">
  {/* Button */}
      <div className="body-con1">
        <button className="fiter-btn" onClick={()=>{
          //filter logic
          let filteredlistres=reslist.filter((res)=>{
            if(res.info.avgRating>4.1){
            console.log(res.info.avgRating);
            return res.info.avgRating>4.1;
            }
          })
          setlistres(filteredlistres);
        }}>Top Rated Restru</button>



  {/* search  */}
        <span className="Search">
           <input type="text" className="Search-box" value={searchText} onChange={(e)=>{
             setsearchText(e.target.value);
           }}></input> 

           <button className="search-btn" onClick={()=>{
            // filter logic
            let filterlist=reslist.filter((ress)=>{
               return ress.info?.name?.includes(searchText);

            });
            setlistres(filterlist);
           }}> search</button>
          
        </span>

        </div>

        <h2 className="restru-heading">Top restaurant chains in Bathinda!!</h2>
        <div className="restrucon">
        
            {/* <Rescard resname="burgerking"
              cuisine="Burgers,Shakes"
                rating="4.8"
                img="https://www.shutterstock.com/image-vector/logo-famous-identity-city-style-600nw-2275679435.jpg"
              />
          
            <Rescard resname="MCD"
              cuisine="Burgers, Fast food"
              rating="4.2"
              img="https://pbs.twimg.com/profile_images/1840790946826354689/yLfoJJt6_400x400.png"
            /> */}
  
            
            {
              listres.map((restru)=>{
              return <Rescard resdata={restru} />
            })
            }


            {/* <Rescard  resdata={reslist[0]}/>
            <Rescard resdata={reslist[1]}/>
            <Rescard resdata={reslist[2]}/>
            <Rescard resdata={reslist[3]}/>
            <Rescard resdata={reslist[4]}/>
            <Rescard resdata={reslist[5]}/> */}
  
  
        </div>
      </div>
    )
}


  
export default Body;