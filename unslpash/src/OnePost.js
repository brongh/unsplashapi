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
      <Container className="justify-content-md-center" style={{ minWidth: "100vh", minHeight: "100vh", position: "relative" }}>
        <div style={{ position: "absolute", bottom: "50%", left: "0", background: "rgba(237, 233, 232, 0.695)", padding: "20px" }}>
          <div style={{ width: "400px" }}>
            <h2>{value.alt_description}</h2>

          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default OnePost;
