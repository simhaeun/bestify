import * as React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const review = [
  {
    id: 1,
    name: "골프 아카데미 A",
    text1: "고객의 플레이 스타일과 선호하는 시간대를 파악해서 그에 맞는 티타임을 예약할 수 있고, 이렇게 하니까 많은 고객들이 만족하고 돌아오는 걸 볼 수 있었어요!",
  },
  {
    id: 2,
    name: "골프 아카데미 B",
    text1: "고객님들이 자신에게 딱 맞는 서비스를 받을 수 있다는 점에서 저희 매장을 선호하게 되었고, 매장의 매출이 상당히 늘었습니다.",
  },
  {
    id: 3,
    name: "골프 아카데미 C",
    text1: "타겟 마케팅 전략의 성공을 통해 고객 유입과 재매출이 증가했어요! 새로운 고객 유입에 큰 도움이 되었습니다.",
  },
  // {
  //   id: 4,
  //   name: "골프 아카데미 D",
  //   text1: "개인화된 서비스와 마케팅을 통해 고객들의 만족도를 높일 수 있었습니다. 매장의 경쟁력을 강화시키고, 지속적인 성장에 도움을 주었습니다.",
  // },
  // {
  //   id: 5,
  //   name: "골프 아카데미 E",
  //   text1: "고객관리와 매출관리를 위해 Saas 솔루션을 도입하였는데, Saas 솔루션을 활용하여 매출을 증대시키는 동시에 고객 만족도가 높아졌어요",
  // },
];

const Review = () => {
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
    });
  }, []);

  return (
    <Section id="고객사례">
      <Container>
        <SubTitle data-aos="fade-in">고객사례</SubTitle>
        <Title data-aos="fade-in">
          최근 도입한 고객사의
          <br />
          따끈한 후기를 확인해보세요
        </Title>
        <Box data-aos="fade-up" data-aos-delay="200">
          <Grid>
            {review.map((item) => (
              <Item key={item}>
                <Profile>
                  <Image
                    src={`/images/review0${item.id}.png`}
                    alt="review"
                    width={165}
                    height={165}
                  />
                </Profile>
                <TextWrap>
                  <Typography variant="h6" component="h6" mb={2}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {item.text1}
                  </Typography>
                  {/* <Typography variant="body1" component="p">
                    {item.text2}
                  </Typography> */}
                </TextWrap>
              </Item>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}
export default Review;

const Section = styled.section`
  background: linear-gradient(180deg, #f3f5f9 0%, hsl(0, 0%, 100%) 100%);
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  } ;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 120px;
  @media (max-width: 1023px) {
    display: block;
  } ;
  @media (max-width: 1023px) {
    margin-top: 80px;
  }
`;
const Item = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0,0,0,.05);
  padding: 24px;
  @media (max-width: 1023px) {
    height: 280px;
    margin-bottom: 80px;
  } ;
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  margin-top: 1rem;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  } ;
  
`;
const SubTitle = styled.h4`
  font-size: 1.4rem;
  line-height: 1.5em;
  color: #47b589;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
const Profile = styled.div`
  margin-top: -80px;
  height: 165px;
  > img {
    border-radius: 100px;
    box-shadow: 0 0 8px rgba(0,0,0,0.05), 0 0 5px rgba(0,0,0,0.05);
    @media (max-width: 767px) {
      width: 120px;
      height: 120px;
    }
  }
  @media (max-width: 767px) {
    height: 120px;
  }
`
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 180px;
  > h6 {
    font-weight: 600;
  }
  > p {
    letter-spacing: -.6px;
    color: #333;
  }
`