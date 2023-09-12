import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import Package from "./Package";

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

  const tabItems = [
    {
      title1: "자동화된 마케팅을 통해",
      title2: "고객을 단골 고객으로 전환",
      text1: "최고의 마케팅은 비용 효율적일 뿐만 아니라 시간 효율적입니다. ",
      text2: "모그의 자동화 마케팅 시스템을 사용하면 별도의 관리 없이 ",
      text3: "50% 이상의 재등록을 달성할 수 있습니다.",
      imgSrc: "/images/mk-img01.png",
    },
    {
      title1: "데이터 기반 마케팅 전략",
      text1:
        "해석하기 어렵거나 검증되지 않은 마케팅에 돈을 쏟아 붓는 것을 중단하세요! 저희는 골프 연습장 / 아카데미를 위한 가장 효과적인 마케팅 전략을 테스트하고 최적화 했습니다. ",
      text2:
        "고객의 특성을 파악하여 매장 맞춤형 광고를 집행하고 명확하고 정직한 리포트를 제공해드립니다. 이를 통해 고객의 유입을 늘리고, 재구매를 유도할 수 있습니다.",
    },
    {
      title1: "마케팅에 필요한",
      title2: "모든 것을 한 곳에서",
      text1: "여러 업체를 선정하고 컨택하는데 시간을 들이지 마세요! ",
      text2:
        "매장 홍보에 필요한 모든 인쇄물 제작부터 배포, 온라인용 이미지까지 모그를 통해 한번에 해결할 수 있습니다.",
    },
  ];

  return (
    <section id="marketing">
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

        <AdvantageGrid>
          {tabItems.map((item) => {
            return (
              <>
                <div>
                  <h4>{item.title1}</h4>
                  <h4>{item.title2}</h4>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
                  {item.imgSrc ? (
                    <Image src={item.imgSrc} width={300} height={300} />
                  ) : null}
                </div>
              </>
            );
          })}
        </AdvantageGrid>

        <Package/>
      </Container>
    </section>
  );
};
export default Marketing;

const Container = styled.div`
  width: 1420px;
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
const AdvantageGrid = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  grid-template-rows: repeat(2);
  gap: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #191919;
  > div {
    padding: 6rem 4rem;
    border-radius: 1rem;
    > h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 0.8;
    }
  }
  > div:nth-child(1) {
    position: relative;
    grid-column: 1 / 3;
    background: #eff6ff;
    > img {
      position: absolute;
      right: 100px;
      bottom: 0px;
    }
  }
  > div:nth-child(2) {
    background: #efffef;
    > h4 {
      margin-bottom: 3.5rem;
    }
  }
  > div:nth-child(3) {
    background: #fffaef;
  }
  @media (max-width: 767px) {
    margin: 3rem 0;
    > div {
      padding: 3rem 2rem;
      > h4 {
        font-size: 1.25rem;
        margin-bottom: 0.8rem;
      }
      > p {
        font-size: 0.9rem;
        display: inline;
      }
    }
    > div:nth-child(1) {
      position: relative;
      grid-column: 1;
      background: #eff6ff;
      > img {
        display: none;
      }
    }
    > div:nth-child(2) {
      background: #efffef;
      > h4 {
        margin-bottom: 1rem;
      }
    }
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1em;
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
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
