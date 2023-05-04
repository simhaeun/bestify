import * as React from "react";
import Animation from "../../components/Animation";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Main = () => {
  React.useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 200,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Section>
      <Title data-aos="fade-in" data-aos-delay="50">
        <span>잘되는 골프연습장 운영</span>
        <br />
        노하우, 궁금하신가요?
      </Title>
      <SubTitle data-aos="fade-in" data-aos-delay="100">
        정답은 100% 고객에게서 찾으셔야 합니다.
        <br />
        고객 데이터 기반 상담관리, 고객관리, 매출관리 솔루션
      </SubTitle>
      <Button data-aos="fade-in" data-aos-delay="150">
        <Link href="/demo">무료이용시작</Link>
      </Button>
      <Text data-aos="fade-in" data-aos-delay="200">
        지금 신청하면 <TextBold>6개월동안 무료</TextBold>로 사용 가능합니다.
      </Text>
    </Section>
  );
}
export default Main;

const Section = styled.main`
  background-image: url('images/background02.jpg');
  background-repeat: no-repeat;
  background-position: center 0;
  text-align: center;
  padding: 170px 0 150px;
  background-color: #fff;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 125px 1.5rem 75px;
  }
`;
const Button = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 10px;
  line-height: 1.54;
  cursor: pointer;
  background-color: #227eff;
  font-weight: 600;
  border: none;
  color: #fff;
  &:hover {
    background: #5e56f0;
  }
  @media (max-width: 767px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;
const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.8px;
  line-height: 1.2em;
  & > span {
    letter-spacing: -1.8px;
  }
  @media (max-width: 1023px) {
    font-size: 3.25rem;
  }
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.h4`
  font-size: 1.25rem;
  line-height: 1.6em;
  font-weight: 400;
  margin: 1.5rem 0;
  letter-spacing: -0.4px;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
const Text = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  margin-top: 1rem;
  font-weight: 300;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const TextBold = styled.span`
  font-weight: 700;
  color: #fff;
`;
