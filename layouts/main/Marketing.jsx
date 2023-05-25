import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import OperatingAgent from "@/components/OperatingAgent";
import BusinessAgent from "@/components/BusinessAgent";

const Marketing = () => {
  React.useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <section>
      <Container>
        <Center data-aos="fade-in">
          <SubTitle>광고 집행, 운영 대행 및 제작 서비스</SubTitle>
          <Title>마케팅 대행 솔루션</Title>
          <Text>
            기존 고객과 잠재 고객의 특성을 파악하여 효과적인 마케팅을
            제공합니다.
            <br />
            이를 통해 고객 유입을 늘리고, 고객으로부터 재구매를 유도할 수
            있습니다.
          </Text>
        </Center>
        <Flex data-aos="fade-up" data-aos-delay="150">
          <div>
            <SvgWrap>
              <OperatingAgent />
            </SvgWrap>
            <Text>멀티 채널 광고 관리, 운영 대행 </Text>
            <Card>
              <li>네이버 플레이스,검색 광고 최적화 및 세팅</li>
              <li>네이버 검색광고 세팅</li>
              <li>페이스북, 인스타그램 광고 집행</li>
              <li>인플루언서</li>
            </Card>
          </div>
          <div>
            <SvgWrap>
              <BusinessAgent />
            </SvgWrap>
            <Text>매장 운영에 필요한 각종 업무 대행 </Text>
            <Card>
              <li>디자인</li>
              <li>출력, 배포</li>
              <li>사이트 제작, 디자인 </li>
              <li>프로필, 매장 촬영</li>
            </Card>
          </div>
        </Flex>
      </Container>
    </section>
  );
};
export default Marketing;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
const Center = styled.div`
  text-align: center;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  height: min-content;
  justify-content: flex-start;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1023px) {
    display: block;
    margin: 1.5rem 0;
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 2.25rem;
  }
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;
const SubTitle = styled.h4`
  font-size: 1.4rem;
  color: #47b589;
  @media (max-width: 767px) {
    letter-spacing: -0.4px;
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`;
const Text = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
const SvgWrap = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 479px) {
    width: 100%;
  }
`
const Card = styled.ul`
 margin-top: 2rem;
 width: 500px;
  > li {
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 0 8px 18px rgba(0,0,0,.05);
    color: #333;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`