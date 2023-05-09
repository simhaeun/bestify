import * as React from "react";
import styled from "@emotion/styled";
import Animation2 from "../../components/Animation2";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Blog = () => {
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
    <Section id="블로그">
      <Container>
        <Flex>
          <div data-aos="fade-in">
            <Title>
              골프 아카데미
              <br />
              운영자를 위한 블로그
            </Title>
            <Text>
              여러분의 골프 아카데미를 성장시키는데 필요한 정보를 제공합니다.
              <br />
              골프 아카데미 대표님들의 운영 노하우도 공유해요.
            </Text>
          </div>
          <AnimationWrap data-aos="fade-in">
            <Animation2 />
          </AnimationWrap>
        </Flex>
      </Container>
    </Section>
  );
}
export default Blog;

const Section = styled.section`
  background: #fff;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  } ;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1279px) {
    display: block;
  } ;
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  } ;
`;
const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.5em;
  margin-top: 2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1rem;
  } ;
`;
const AnimationWrap = styled.div`
  @media (max-width: 767px) {
    display: none;
  } ;
`