import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import FaqList from "@/components/FaqList";

const Faq = () => {
  React.useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 200,
      duration: 400,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Section>
      <Container>
        <div data-aos="fade-in">
          <Title>FAQ</Title>
          <FaqList/>
        </div>
      </Container>
    </Section>
  );
}
export default Faq;

const Section = styled.section`
  background: #fff;
`;
const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  margin-bottom: 75px;
  @media (max-width: 767px) {
    font-size: 2.25rem;
  }
`;
const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.5em;
  margin-top: 2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
