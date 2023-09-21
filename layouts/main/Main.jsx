import * as React from "react";
import Animation from "../../components/Animation";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

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
      <Container>
        <div>
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
          <div data-aos="fade-in" data-aos-delay="150">
            <Button>
              <Link href="/demo">무료이용시작</Link>
              {/* <Link href="https://www.morg.im/" target="_blank">무료이용시작</Link> */}
            </Button>
          </div>
          <span
            data-aos="fade-in"
            data-aos-delay="200"
            style={{ color: "#0fb97b" }}
          >
            지금 신청하면 <span style={{ fontWeight: "600" }}>1개월 동안 무료</span>로 사용 가능합니다.
          </span>
          <Text data-aos="fade-in" data-aos-delay="250">
            지금 신청하면 <TextBold>6개월동안 무료</TextBold>로 사용 가능합니다.
          </Text>
        </div>
        <ImageDiv data-aos="fade-in" data-aos-delay="300">
          <Image src="/images/main05.png" alt="" width={1000} height={700} />
        </ImageDiv>
      </Container>
    </Section>
  );
};
export default Main;

const Section = styled.main`
  /* background-image: url('images/background02.jpg'); */
  background-repeat: no-repeat;
  background-position: center 0;
  padding: 180px 0 140px;
  background-color: #fff;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 125px 1.5rem 75px;
  }
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImageDiv = styled.div`
  height: auto;
  margin: 0 auto;
  border-radius: 1rem;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 1.5rem 0;
  }
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`;
const Button = styled.button`
  display: block;
  margin: 50px auto;
  border-radius: 60px;
  height: 60px;
  line-height: 60px;
  padding: 0 52px;
  font-size: 21px;
  cursor: pointer;
  background: #0fb97b;
  font-weight: 600;
  border: none;
  color: #fff;
  transition: .5s;
  &:hover {
    background: #DBFFF2;
    color: #0fb97b;
    transition: .5s;
  }
  @media (max-width: 767px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;
const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
  @media (max-width: 1023px) {
    font-size: 3.25rem;
  }
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  margin: 2rem 0;
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
