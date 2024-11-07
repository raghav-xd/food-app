import {LOGO_URL} from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;