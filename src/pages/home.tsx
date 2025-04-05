import React from "react";
import { Button, Carousel, CarouselItem } from "react-bootstrap";
import me from "../../public/Portfolio.jpg";
import family from "../../public/MeAndWifey.jpg"

export const Home = () => {

    const handleResumeClick = () => {
        window.open("/portfolio-lincoln/Resume%20-%20Lincoln%20Bunker.pdf", "_blank")
    }

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        //   padding: "20px",
          gap: "20px",
        }}
      >
        {/* Text Section */}
        <div style={{ flex: 1, marginRight: "20px", minWidth: "280px" }}>
          <h3 style={{ fontSize: "2rem" }}>Hey!</h3>
          <h5 style={{ fontSize: "1.5rem" }}>My name is Lincoln Bunker</h5>
          <h5 style={{ fontSize: "1.5rem" }}>Fullstack Software Engineer</h5>
          <h5 style={{ fontSize: "1.25rem" }}>
            I'm a passionate Software Engineer based in Salt Lake City studying Computer Science.
            Currently, I am working as a Software Engineer at Monolith Brands Group. I have a strong interest
            in Fullstack Software Development and backend engineering. I am looking forward to continuing to
            expand my skills as a Software Engineer!
          </h5>
          <Button
            style={{ marginTop: 25, backgroundColor: '#9de6ba', border: '#48423f', color: 'black'}}
            onClick={handleResumeClick}
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
            {/* <CarouselItem>
            <img
                src={costa}
                alt="Image of Lincoln Bunker in the Tetons"
                style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                }}
            />
            </CarouselItem> */}
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};
