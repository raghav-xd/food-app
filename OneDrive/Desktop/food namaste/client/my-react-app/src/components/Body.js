import Rescard from "./Rescart";
import reslist from "../utils/mockData";
    
//body
const Body=()=>{
    

    return (
      <div className="body">
        <button className="fiter-btn" onClick={()=>{
          console.log("btn clicked");
        }}>Top Rated Restru</button>

        
        <h2 className="restru-heading">Top restaurant chains in Bathinda</h2>
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
              reslist.map((a)=>{
              return <Rescard resdata={a} />
            })
            }

            <Rescard  resdata={reslist[0]}/>
            <Rescard resdata={reslist[1]}/>
            <Rescard resdata={reslist[2]}/>
            <Rescard resdata={reslist[3]}/>
            <Rescard resdata={reslist[4]}/>
            <Rescard resdata={reslist[5]}/>
  
  
        </div>
      </div>
    )
  }

  export default Body;