import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Title, SubTitle2, Center } from '../../styles/style';

const Contact = () => {
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
    <Section id="contact">
      <Container>
        <Center>
          <Title data-aos="fade-in" style={{color: "white"}}>
            궁금하신 점이 있다면
            <br />
            언제든지 문의해주세요.
          </Title>
          <SubTitle2 data-aos="fade-in" data-aos-delay="100">
            당신의 골프 아카데미를 성장시키는데 필요한<br />
            최적의 솔루션을 제공해드리겠습니다.
          </SubTitle2>
        </Center>
      </Container>
    </Section>
  );
}
export default Contact;

const Section = styled.section`
  background: #0fb97b;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
`;
