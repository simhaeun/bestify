import * as React from "react";
import styled from "@emotion/styled";
import Layout from "@/layouts/Layout";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Form from "@/components/Form";

export default function Demo() {
  return (
    <Layout>
      <Section>
        <Container>
          <Grid>
            <TextWrap>
              <Title>상담 후 결정하세요!</Title>
              <Text>한 눈에 보이는 데이터, 효율적인 업무처리를 도와드립니다.</Text>
              <TextList>
                <li><CheckBoxIcon/> 만족스러운 고객 경험과 높은 등록률</li>
                <li><CheckBoxIcon/> 매장 수익과 비용을 체계적 관리</li>
                <li><CheckBoxIcon/> 간편한 업무처리, 시간과 비용 절감</li>
                <li><CheckBoxIcon/> 다양한 광고채널 분석, 효율적인 광고 집행</li>
              </TextList>
            </TextWrap>
            <Box>
              <Form />
            </Box>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}

const Section = styled.section`
  background: #f8f8f8;
  min-height: 90vh;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 50px 1.5rem 0;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;
const Box = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 18px rgba(0,0,0,.05);
  @media (max-width: 767px) {
    border-radius: 6px;
    padding: 50px 0;
  }
`;
const TextWrap = styled.div`
  display: grid;
  gap: 1rem;
  text-align: left;
  @media (max-width: 1023px) {
    margin-bottom: 50px;
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 700;
  @media (max-width: 1023px) {
    font-size: 2.25rem;
  }
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;
const Text = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  margin-bottom: 30px;
  color: #333;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
const TextList = styled.ul`
  color: #333;
  > li {
    align-items: center;
    display: flex;
    line-height: 2;
    > svg {
      margin-right: 6px;
    }
  }
`
