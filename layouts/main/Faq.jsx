import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import FaqList from "@/components/FaqList";
import { Container, Title } from '../../styles/style';

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