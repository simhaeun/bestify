import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { Container, Center, ImageDiv, Text2, Button } from '../../styles/style';

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
        <Center>
          <h2 data-aos="fade-in" data-aos-delay="50" style={{fontSize: "48px", fontWeight: "bold"}}>
            잘되는 골프연습장 운영<br />
            노하우, 궁금하신가요?
          </h2>
          <Text2 data-aos="fade-in" data-aos-delay="100">
            정답은 100% 고객에게서 찾으셔야 합니다.
            <br />
            고객 데이터 기반 상담관리, 고객관리, 매출관리 솔루션
          </Text2>
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
        </Center>
        <ImageDiv data-aos="fade-in" data-aos-delay="300">
          <Image src="/images/main05.png" alt="" width={1000} height={700} />
        </ImageDiv>
      </Container>
    </Section>
  );
};
export default Main;

const Section = styled.main`
  background-repeat: no-repeat;
  background-position: center 0;
  padding: 180px 0 140px;
  background-color: #fff;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 125px 1.5rem 75px;
  }
`;