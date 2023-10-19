import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Container, Center, Flex, LeftTextBox, RightTextBox, ImageDiv, Title, SubTitle, Text } from '../../styles/style';

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
    <Section id="skill">
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
            <Image src="/images/main07.png" alt="" width={600} height={400} />
          </div>
        </Flex>

        <Flex data-aos="fade-left">
          <div>
            <Image src="/images/main06.png" alt="" width={600} height={450} />
          </div>
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
            <Image src="/images/main05.png" alt="" width={600} height={400} />
          </div>
        </Flex>
        <Flex data-aos="fade-left">
          <div>
            <Image src="/images/main02.png" alt="" width={600} height={400} />
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
