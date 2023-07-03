import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

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

  const product = [
    // {
    //   title: "Basic Package",
    //   summary: "99만원 / 3개월",
    //   imgSrc: "/images/main03.png",
    // },
    // {
    //   title: "Advanced Package",
    //   summary: "297만원 / 3개월",
    // },
    {
      title: "디지털 마케팅",
      summary: "홈페이지 / SNS 개설 및 초기 세팅, 광고, 전단지",
      imgSrc: "/images/mk-img04.jpg",
    },
    {
      title: "디자인",
      summary: "홍보물 및 이미지 제작 (전단지, 리플렛, 배너, 이벤트, 디지털 마케팅 등)",
      imgSrc: "/images/mk-img04.jpg",
    },
    {
      title: "촬영",
      summary: "프로필 / 매장",
      imgSrc: "/images/mk-img04.jpg",
    },
  ];

  const tabItems = [
    {
      title1: "자동화된 마케팅을 통해",
      title2: "고객을 단골 고객으로 전환",
      text1: "최고의 마케팅은 비용 효율적일 뿐만 아니라 시간 효율적입니다.",
      text2: "모그의 자동화 마케팅 시스템을 사용하면 별도의 관리 없이",
      text3: "50% 이상의 재등록을 달성할 수 있습니다.",
      imgSrc: "/images/mk-img01.png",
    },
    {
      title1: "데이터 기반 마케팅 전략",
      text1: "해석하기 어렵거나 검증되지 않은 마케팅에 돈을 쏟아 붓는 것을 중단하세요! 저희는 골프 연습장 / 아카데미를 위한 가장 효과적인 마케팅 전략을 테스트하고 최적화 했습니다.",
      text2: "고객의 특성을 파악하여 매장 맞춤형 광고를 집행하고 명확하고 정직한 리포트를 제공해드립니다. 이를 통해 고객의 유입을 늘리고, 재구매를 유도할 수 있습니다.",
    },
    {
      title1: "마케팅에 필요한",
      title2: "모든 것을 한 곳에서",
      text1: "여러 업체를 선정하고 컨택하는데 시간을 들이지 마세요!",
      text2: "매장 홍보에 필요한 모든 인쇄물 제작부터 배포, 온라인용 이미지까지 모그를 통해 한번에 해결할 수 있습니다.",
    },
  ];

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
                  {
                    item.imgSrc ?
                    <Image src={item.imgSrc} width={300} height={300}/>
                    : null
                  }
                </div>
              </>
            );
          })}
        </AdvantageGrid>

        <Grid data-aos="fade-up" data-aos-delay="150">
          <Card>
            <CardHeader>
              <Rounded>
                <span>월 33만원</span>
              </Rounded>
              <h4>
                Basic Package<span>/ 3개월</span>
              </h4>
              <p>처음 시작하는 분들, 센터 규모 타석 7개 미만</p>
              <p>990,000원 (정상가 140만원)</p>
            </CardHeader>
            <CardCont>
              <ul>
                <li>기본 상권, 고객 분석</li>
                <li>네이버 플레이스 검색 광고 최적화 및 세팅</li>
                <li>네이버 검색광고 세팅</li>
                <li>홈페이지 개설</li>
                <li>매장 촬영 (고화질 30장)</li>
                <li>디자인 10개 (디지털 마케팅)</li>
                <li>월간 리포트</li>
              </ul>
            </CardCont>
          </Card>
          <Card>
            <CardHeader>
              <Rounded>
                <span>월 99만원</span>
              </Rounded>
              <h4>
                Advanced Package<span>/ 3개월</span>
              </h4>
              <p>고객 200명 이상 센터를 운영하시는 분들</p>
              <p>2,970,000원 (정상가 480만원)</p>
            </CardHeader>
            <CardCont>
              <ul>
                <li>상세 상권, 고객 분석</li>
                <li>네이버 플레이스 상위 노출 최적화 및 키워드 세팅</li>
                <li>네이버 검색광고 세팅 </li>
                <li>홈페이지 개설</li>
                <li>매장 촬영 (원본제공, 고화질 50장)</li>
                <li>디자인 30개 (디지털 마케팅)</li>
                <li>주간 리포트, 월간 리포트</li>
              </ul>
            </CardCont>
          </Card>
        </Grid> 

        {/* <GridContainer data-aos="fade-up" data-aos-delay="150">
          {product.map((item, index) => {
            return (
              <>
               // <Link href={`/productDetail/post1`} key={item.index}></Link> 
                <Item>
                  <ImageWrap>
                    {
                      <Image
                        src={item.imgSrc}
                        alt="product"
                        width={500}
                        height={380}
                      />
                    }
                  </ImageWrap>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.summary}</p>
                  </div>
                </Item>
              </>
            );
          })}
        </GridContainer> */}


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

const GridContainer = styled.div`
  margin: 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 20px;
`;
const Item = styled.div`
  > div > h4 {
    font-size: 1.5rem;
    margin-bottom: 6px;
  }
  > div > p {
    font-size: 15px;
    color: #6c6c6c;
  }
`;
const ImageWrap = styled.div`
  background: #eff6ff;
  width: 100%;
  min-height: 380px;
  margin-bottom: 1rem;
`;
const TextWrap = styled.div`
  padding: 100px 60px;
  > h4 {
    font-size: 30px !important;
    line-height: 1.2;
    margin-bottom: 2rem;
    letter-spacing: -0.4px;
    color: #007c5c;
  }
  > p {
    font-size: 18px;
    line-height: 1.6;
  }
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
`;

const Grid = styled.article`
  max-width: 1080px;
  margin: 150px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 20px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1023px) {
    display: block;
    margin: 1.5rem 0;
  }
`;
const Card = styled.div`
  border-radius: 24px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
  text-align: left;
  color: #333;
  &:nth-child(2) {
    > div:nth-child(2) {
      background: #f5f2ff;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const CardHeader = styled.div`
  padding: 3.5rem 4rem;
  line-height: 1.4;
  > h4 {
    font-size: 2.2rem;
    margin-bottom: 0.6rem;
    > span {
      padding-left: 10px;
      font-size: 1rem;
      font-weight: 300;
      color: #878d91;
    }
  }
  @media (max-width: 767px) {
    padding: 2rem;
    margin-top: 2rem;
    > h4 {
      font-size: 1.4rem;
      > span {
        font-size: 0.8rem;
      }
    }
    > p {
      font-size: 0.9rem;
    }
  }
`;
const CardCont = styled.div`
  border-radius: 0 0 24px 24px;
  background: #eff6ff;
  padding: 3.5rem 4rem;
  > ul > li {
    line-height: 2rem;
    ::before {
      content: "";
      width: 16px;
      height: 16px;
      background: #d7e0ec;
      border-radius: 16px;
      display: inline-block;
      margin-right: 8px;
    }
  }
  @media (max-width: 767px) {
    padding: 2rem;
    > ul > li {
      font-size: 0.8rem;
      line-height: 1.8rem;
    }
  }
`;
const Rounded = styled.div`
  margin-bottom: 2rem;
  > span {
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;
    background: #eff6ff;
    color: #444444;
  }
  @media (max-width: 767px) {
    margin-bottom: 1.5rem;
    > span {
      font-size: 0.8rem;
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
