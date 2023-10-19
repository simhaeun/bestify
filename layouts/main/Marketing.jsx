import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Package from "./Package";
import { Container, Center, Title, SubTitle, Text, AdvantageGrid } from '../../styles/style';

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
      text1: "검증되지 않은 마케팅에 돈을 쏟아 붓는 것을 중단하세요!",
      text2: "저희는 골프 연습장/아카데미를 위한 가장 효과적인 마케팅 전략을 테스트하고 최적화 했습니다. 고객의 특성을 파악하여 매장 맞춤형 광고를 집행하고 명확하고 정직한 리포트를 제공해드립니다. 이를 통해 고객의 유입을 늘리고, 재구매를 유도할 수 있습니다.",
    },
    {
      title1: "마케팅에 필요한",
      title2: "모든 것을 한 곳에서 !",
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
                <div data-aos="fade-in">
                  <h4>{item.title1}</h4>
                  <h4>{item.title2}</h4>
                  <p style={{marginTop: '20px'}}>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
                  {item.imgSrc ? (
                    <Image src={item.imgSrc} width={300} height={300} alt="img" />
                  ) : null}
                </div>
              </>
            );
          })}
        </AdvantageGrid>
      </Container>
      <Package/>
    </section>
  );
};
export default Marketing;
