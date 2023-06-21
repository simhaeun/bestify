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
    text1: "고객 데이터 분석으로 고객 만족도 증가",
    text2: "고객별 맞춤형 서비스 제공으로 매출 증대",
  },
  {
    id: 2,
    name: "골프 아카데미 B",
    text1: "고객 데이터를 기반으로한 타겟 마케팅 전략 성공",
    text2: "고객 유입 증가 및 재매출 증대",
  },
  {
    id: 3,
    name: "골프 아카데미 C",
    text1: "매출 증대와 고객 만족도 향상을 동시에 달성",
    text2: "기존 고객들의 재매출을 유도하고 새로운 고객 유입",
  },
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
                  <Typography variant="body1" component="p">
                    {item.text2}
                  </Typography>
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