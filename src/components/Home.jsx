import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge, Row, Col } from "react-bootstrap";
import { fetchRockets } from "../redux/Home/homeslice";

function Home() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  return (
    <>
      <div>
        {rockets.map(({ id, name, description, flickrImages, reserved }) => (
          <Row
            className="rocket-container align-items-center mt-md-3 m-5"
            data-testid="rocket"
            key={id}
          >
            <Col sm={5} md={4} lg={3}>
              <img src={flickrImages} alt="rocket" width="100%" />
            </Col>
            <Col className="rocket-description">
              <h2 className="text-capitalize">{name}</h2>
              <p>
                {reserved && (
                  <Badge
                    bg="success"
                    className="p-2"
                    style={{ marginRight: "1vw" }}
                  >
                    Reserved
                  </Badge>
                )}
                {description}
              </p>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}

export default Home;
