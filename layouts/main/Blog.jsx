import * as React from "react";
import styled from "@emotion/styled";
import Animation2 from "../../components/Animation2";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Container, Title, Flex, Text, AnimationWrap } from '../../styles/style';

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
    <section id="blog">
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
            <Link href="https://blog.naver.com/morgkorea" target="_blank">
              <Animation2 />
            </Link>
          </AnimationWrap>
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;


