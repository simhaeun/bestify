import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Dashboard() {
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
    <Section id="기능소개">
      <Container>
        <Center data-aos="fade-in">
          <SubTitle>모든 운영 데이터를 한 곳에서</SubTitle>
          <Title>대시보드 솔루션</Title>
          <Text>
            비효율적인 관리와 반복 업무는 그만,
            <br />
            시각화 데이터를 보고 효율적으로 매장을 운영해보세요.
          </Text>
        </Center>
        <Flex data-aos="fade-right">
          <LeftTextBox>
            <SubTitle>상담관리</SubTitle>
            <Title>
              매장의 첫 인상이
              <br />
              시작되는 상담
            </Title>
            <Text>
              고객 상담시간 단축과 간편 데이터 입력
              <br />
              만족스러운 고객 경험과 80% 등록률을 약속드립니다.
            </Text>
          </LeftTextBox>
          <div>
            <Image src="/images/main01.png" alt="" width={600} height={400} />
          </div>
        </Flex>
        <Flex data-aos="fade-left">
          <ImageDiv>
            <Image src="/images/main02.png" alt="" width={600} height={400} />
          </ImageDiv>
          <RightTextBox>
            <SubTitle>회원관리</SubTitle>
            <Title>
              고객의 니즈 파악
              <br />
              맞춤형 서비스 제공
            </Title>
            <Text>
              대면, 비대면 상담을 통해 수집된 데이터로
              <br />
              회원의 특성을 분석하여 맞춤형 서비스를 제공합니다.
            </Text>
          </RightTextBox>
        </Flex>
        <Flex data-aos="fade-right">
          <LeftTextBox>
            <SubTitle>매출관리</SubTitle>
            <Title>
              수익과 비용을
              <br />
              체계적으로 관리
            </Title>
            <Text>
              시각화 된 데이터 제공을 통해
              <br />
              사장님들의 데이터 기반 의사결정을 돕습니다.
            </Text>
          </LeftTextBox>
          <div>
            <Image src="/images/main03.png" alt="" width={600} height={450} />
          </div>
        </Flex>
        <Flex data-aos="fade-left">
          <div>
            <Image src="/images/main04.png" alt="" width={600} height={400} />
          </div>
          <RightTextBox>
            <SubTitle>마케팅 관리</SubTitle>
            <Title>
              운영중인 광고 채널
              <br />
              연동하여 비교 및 분석
            </Title>
            <Text>
              전문가가 아니더라도 광고의 성과를 쉽게 확인하고
              <br />
              효율적인 광고 집행을 할 수 있도록 돕습니다.
            </Text>
          </RightTextBox>
        </Flex>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(180deg, #f3f5f9 0%, hsl(0, 0%, 100%) 100%);
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
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
  margin-top: 200px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1023px) {
    display: block;
    margin-top: 100px;
    &:nth-child(even) {
      display: flex;
      flex-wrap: wrap-reverse;
      flex-direction: column-reverse;
      > div {
        width: 100%;
      }
    }
  }
  @media (max-width: 1023px) {
    margin-top: 80px;
  }
`;
const LeftTextBox = styled.div`
  text-align: left;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  height: min-content;
  justify-content: flex-start;
`;
const RightTextBox = styled.div`
  text-align: right;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  height: min-content;
  justify-content: flex-start;
`;

const ImageDiv = styled.div`
  width: 600px;
  height: auto;
  border-radius: 1rem;
  > img {
    border-radius: 1rem;
    box-shadow: 0 8px 18px rgba(0,0,0,.05);
  }
  @media (max-width: 1023px) {
    width: 100%;
    margin: 1.5rem 0;
  }
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  @media (max-width: 1023px) {
    font-size: 2.25rem;
  }
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;
const SubTitle = styled.h4`
  font-size: 1.4rem;
  color: #227eff;
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
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
