import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaMicrophone, FaCog } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="row">
      <div className="nav-arrow-icon">
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>
      </div>

      <div>
        <h1 className="header">Country States</h1>
      </div>
      <div className="nav-icon">
        <div>
          <FaMicrophone size={20} />
        </div>
        <div>
          <FaCog size={20} />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
