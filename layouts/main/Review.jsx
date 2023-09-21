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
    text1: "모그를 도입한 후, 예약 증가와 함께 매출도 꾸준히 상승 중입니다. 경쟁이 치열한 골프장 시장에서 빛나는 솔루션을 찾게 되어 기뻐요. 매출 관리도 훨씬 간편해졌어요 ",
  },
  {
    id: 2,
    name: "골프 아카데미 B",
    text1: "이제는 고객들과 더 가까워진 느낌이에요. 고객 데이터를 통해 니즈를 파악하고, 서비스를 제공하니까 고객 만족도도 엄청 좋아지고 있어요.",
  },
  {
    id: 3,
    name: "골프 아카데미 C",
    text1: "높은 고객 만족도, 그리고 높아진 매출 모그 덕분이에요! 고객 데이터를 활용한 관리가 정말 큰 도움이 되고 있어요.",
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
    <Section id="review">
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
                {/* <Profile>
                  <Image
                    src={`/images/review0${item.id}.png`}
                    alt="review"
                    width={165}
                    height={165}
                  />
                </Profile> */}
                <TextWrap>
                  {/* <Typography variant="h6" component="h6" mb={2}></Typography>ㄴ */}
                  <Typography variant="body1" component="p">
                    {item.text1}
                  </Typography>
                  {/* <Typography variant="body1" component="p"></Typography> */}
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
  font-size: 2.8rem;
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
  color: #0fb97b;
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
  text-align: left;
  height: 180px;
  > h6 {
    font-weight: 600;
  }
  > p {
    letter-spacing: -.6px;
    color: #333;
  }
`