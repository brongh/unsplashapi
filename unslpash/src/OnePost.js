import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const OnePost = ({ style, value, increment }) => {
  const boo = increment % 2 === 0;
  const img = value.urls.regular;
  const imgStyle = {
    ...style,
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: boo ? "black" : "##539B52",
    backgroundBlendMode: boo ? "difference" : "lighteen",
    clipPath: "polygon(0% 0%, 50% 0, 100% 40%, 100% 100%, 50% 100%, 0 60%)",
    color: "white",
    // textShadow:
    //   "-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  };

  return (
    <Jumbotron fluid style={imgStyle}>
      <Container
        className="justify-content-md-center"
        style={{ minWidth: "100vh", minHeight: "100vh", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "0",
            // background: "rgba(237, 233, 232, 0.695)",
            padding: "50px",

            background: "rgba(0,0,0,0.2)",
            width: "450px",
          }}
        >
          <div style={{ width: "400px" }}>
            <h1>{value.alt_description}</h1>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default OnePost;
