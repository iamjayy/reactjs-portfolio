import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import "./Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Front End</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <h5>Material Ui</h5>
                </div>
                <div className="item">
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <h5>CSS3</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
        {/* 
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Back End</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <h5>MYSQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Tools</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <h5>Vs Code</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row> */}
      </Container>
      <img
        className="background-image-left"
        alt="skills gradient"
        src={colorSharp}
      />
    </section>
  );
};
