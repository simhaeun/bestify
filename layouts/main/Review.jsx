import * as React from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  GridItem,
  Title,
  SubTitle,
  Grid,
  TextWrap,
  Center,
} from "../../styles/style";

const review = [
  {
    id: 1,
    name: "골프 아카데미 A",
    text1:
      "모그를 도입한 후, 예약 증가와 함께 매출도 꾸준히 상승 중입니다. 경쟁이 치열한 골프장 시장에서 빛나는 솔루션을 찾게 되어 기뻐요. 매출 관리도 훨씬 간편해졌어요 ",
  },
  {
    id: 2,
    name: "골프 아카데미 B",
    text1:
      "이제는 고객들과 더 가까워진 느낌이에요. 고객 데이터를 통해 니즈를 파악하고, 서비스를 제공하니까 고객 만족도도 엄청 좋아지고 있어요.",
  },
  {
    id: 3,
    name: "골프 아카데미 C",
    text1:
      "높은 고객 만족도, 그리고 높아진 매출 모그 덕분이에요! 고객 데이터를 활용한 관리가 정말 큰 도움이 되고 있어요.",
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
    <section id="review" style={{ background: "linear-gradient(180deg, #f3f5f9 0%, hsl(0, 0%, 100%) 100%)" }}>
      <Container>
        <Center>
          <SubTitle data-aos="fade-in">고객사례</SubTitle>
          <Title data-aos="fade-in">
            최근 도입한 고객사의
            <br />
            따끈한 후기를 확인해보세요
          </Title>
          <Box data-aos="fade-up" data-aos-delay="200">
            <Grid style={{marginTop: "100px"}}>
              {review.map((item) => (
                <GridItem key={item}>
                  <TextWrap>
                    <Typography variant="body1" component="p">
                      {item.text1}
                    </Typography>
                  </TextWrap>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Center>
      </Container>
    </section>
  );
};

export default Review;