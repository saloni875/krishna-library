

import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        background: "linear-gradient(to right, #809bb8ff, #ffffff)",
        minHeight: "80vh",
        padding: "2rem",
      }}
    >
      <Container>
        <h1
          className="fw-bold text-primary"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Welcome to Krishna Library
        </h1>
        <p className="lead" data-aos="fade-up" data-aos-delay="200">
          A peaceful environment for self-study, exam prep & personal growth.
        </p>
        <Button variant="primary" className="mt-3" data-aos="zoom-in" data-aos-delay="400">
          Book Your Seat Now
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
