import * as React from "react";
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
    <section>
      <Container>
        <div data-aos="fade-in">
          <Title>FAQ</Title>
          <FaqList />
        </div>
      </Container>
    </section>
  );
}
export default Faq;
 