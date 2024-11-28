import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header = () => {

  const [btnName,setbtnName]=useState("Login");
  

    return (
      <div className="navbar">
        <div>
          <img className="logo" src={LOGO_URL}/>
        </div>
       

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <button className="login-Btn" onClick={()=>{
              btnName==="Login"?setbtnName("Logout"): setbtnName("Login");
            }}>
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;