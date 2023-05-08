import * as React from "react";
import styled from "@emotion/styled";
import AccordionText from "../../components/Accordion";
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
            <OperatingAgent/>
            <Text>멀티 채널 광고 관리, 운영 대행 </Text>
          </div>
          <div>
            <BusinessAgent/>
            <Text>매장 운영에 필요한 각종 업무 대행 </Text>
          </div>
        </Flex>
      </Container>
    </section>
  );
}
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
  } ;
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 2.25rem;
  } ;
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
  } ;
`;
