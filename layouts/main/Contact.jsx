import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
// import { background } from 'images/background01.jpg'

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
    <Section id="문의하기">
      <Container>
        <Title data-aos="fade-in">
          궁금하신 점이 있다면
          <br />
          언제든지 문의해주세요.
        </Title>
        <SubTitle data-aos="fade-in" data-aos-delay="100">
          당신의 골프 아카데미를 성장시키는데 필요한<br />
          최적의 솔루션을 제공해드리겠습니다.
        </SubTitle>
      </Container>
    </Section>
  );
}
export default Contact;

const Section = styled.section`
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('images/background01.jpg'); */
  background: #90bca1;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  } ;
`;
const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  } ;
`;
const SubTitle = styled.h4`
  font-size: 1.2rem;
  line-height: 1.5em;
  font-weight: 400;
  letter-spacing: -0.4px;
  color: #fff;
  margin-top: 2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1rem;
  } ;
`;
