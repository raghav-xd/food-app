import { CDN_URL } from "../utils/constants";


// const stylecard={
//     backgroundColor:"#f0f0f0",
//   };
  // const Rescard=({resdata})=>{
  //   return(
  //     <div className="res-cards" style={stylecard}>
  //         {/* <img src={props.img}/> */}
  //        <h3>{resdata.data.name  || "Unknown"}</h3>
  //        <h4>{resdata.data.city || "Unknown"}</h4>
  //        <h4> {resdata.rating  || "Unknown"}</h4>
  //        <h4>38 minutes</h4>
  //     </div>
  //   );
  // };
  
  
  const Rescard = ({resdata}) => {
    return (
      <div className="res-cards" >
        <img className="card-img" src={CDN_URL+ resdata.info.cloudinaryImageId}/>
        
        <h3>{resdata.info.name}</h3>
        <h5>{resdata.info.locality}</h5>
        <h5>{resdata.info.areaName }</h5>
        <h5>Deliery time-38 minutes</h5>
        <h5>Rating-{resdata.info.avgRating}</h5>
        
      </div>
    );
  };

  export default Rescard;