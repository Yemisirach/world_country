import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaMicrophone, FaCog } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import "../css/navbar.css";

function Navbar() {
  return (
    <Row className="row">
      <Col className="nav-arrow-icon">
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>
      </Col>

      <Col>
        <h1 className="header">Country States</h1>
      </Col>
      <Col>
        <div className="nav-icon">
          <FaMicrophone size={25} />
          <FaCog size={25} />
        </div>
      </Col>
    </Row>
  );
}
export default Navbar;
