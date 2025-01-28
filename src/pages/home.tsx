import React from "react";
import { Button, Carousel, CarouselItem } from "react-bootstrap";
import me from "../../public/Portfolio.jpg";
import wyoming from "../../public/WyomingMe.jpg"
import family from "../../public/MeAndWifey.jpg"

export const Home = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        {/* Text Section */}
        <div style={{ flex: 1, marginRight: "20px", minWidth: "280px" }}>
          <h3>Hey!</h3>
          <h5>My name is Lincoln Bunker</h5>
          <h5>Fullstack Software Engineer</h5>
          <h5>
            I'm a passionate Software Engineer Based in Salt Lake City, currently studying Computer Science.
            Currently, I am working as a Software Engineer at Monolith Brands Group. I have a strong interest
            in Fullstack software development and backend engineering. I am looking forward to continuing to
            expand my skills as a Software Engineer!
          </h5>
          <Button
            style={{ marginTop: 25}}
          >
            Get my resume
        </Button>
        </div>

        {/* Image Section */}
        <div style={{ flex: 1, textAlign: "center", minWidth: "280px" }}>
          {/* <img
            src={me}
            alt="Image of Lincoln Bunker"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
            }}
          /> */}
          <Carousel>
            <CarouselItem>
            <img
                src={me}
                alt="Image of Lincoln Bunker"
                style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                }}
            />
            </CarouselItem>
            <CarouselItem>
            <img
                src={family}
                alt="Image of Lincoln and Kylie"
                style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                }}
            />
            </CarouselItem>
            <CarouselItem>
            <img
                src={wyoming}
                alt="Image of Lincoln Bunker in the Tetons"
                style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                }}
            />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};
