import React, { useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const OnePost = ({ style, value, increment }) => {
  const boo = increment % 2 === 0;
  const img = value.urls.regular;
  const imgStyle = {
    ...style,
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: boo ? "grey" : "##539B52",
    backgroundBlendMode: boo ? "luminosity" : "lighteen",
    clipPath: "polygon(0% 0%, 50% 0, 100% 40%, 100% 100%, 50% 100%, 0 60%)",
  };

  return (
    <Jumbotron fluid style={imgStyle}>
      <Container className="justify-content-md-center">
        <Row xs={2} md={3}>
          <Col></Col>
          <Col></Col>
          <Col xs={6} md={4}>
            <h1>Fluid jumbotron{increment}</h1>
            <p>{value.alt_description}</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default OnePost;
