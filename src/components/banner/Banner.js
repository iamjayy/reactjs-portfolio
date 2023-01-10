import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import "./Banner.css";

export const Banner = () => {
  // state for typed text animation //
  const [loopNum, setLoopNum] = useState(0); //useState to display the first index
  const [isDeleting, setIsDeleting] = useState(false); //initially set to false because we start by typing the word
  const toRotate = ["Web Developer", "Designer"];
  const [text, setText] = useState(""); //indicate the portion of the text being displayed until full word
  const [delta, setDelta] = useState(300 - Math.random() * 100); // determine how fast of one letter is typed
  const period = 2000; //time of word being typed out

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length; // i = index from the array because the loop number '%' is constantly increasing and to rotate length
    let fullText = toRotate[i];
    let updatedText = isDeleting //text to be updated or set to.
      ? fullText.substring(0, text.length - 1) //if current state if being deleted then take the full text and get its substring one letter less.
      : fullText.substring(0, text.length + 1); //if not deleting then add one letter to the current text and come closer to the full text

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Jason Nguyen Portfolio</span>
            <h1>
              {"Hi! I'm Jason "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <button onClick={() => console.log("connect")}>
              Lets Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
