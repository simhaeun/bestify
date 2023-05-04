import * as React from "react";
import styled from "@emotion/styled";
import Layout from "@/layouts/Layout";
import Link from "next/link";

export default function post2() {
  
  return (
    <Layout>
      <Section>
        <Container>
          <TitleWrap>
            <SubTitle>SUBTITLE</SubTitle>
            <Title>설문을 원페이지로 만드는 법</Title>
            <Date>April 5, 2023</Date>
          </TitleWrap>

          <Content>
            <div style={{marginBottom: '75px'}}>
              <CoverImage/>
            </div>
            <h4>✒️ Editor’s Note </h4>
            <p>많은 분들이 기다리고 기다리시던, 원페이지 설문이 업데이트 되었습니다! ‘원페이지 설문’이란, 여러 문항이 한 페이지 내에서 보이는 설문을 의미합니다. 기존 왈라의 설문이 한페이지 당 하나의 응답만 할 수 있는 툴이었다면, 이제는 여러가지 문항을 한 번에 보실 수 있습니다! 오늘은 어떻게 원페이지 설문을 만드는지 알려드릴게요.</p>
            <br />
            <h4>어떻게 만들 수 있나요?</h4>
            <p>우선, 이전과 동일하게 프로젝트를 생성하고, [프로젝트 편집] 페이지에 들어갑니다. [프로젝트 편집] 페이지에서 [다중필드]를 선택하시면 끝입니다!</p>
          </Content>


          <div>
            <h2>다른 콘텐츠</h2>
            <Flex>
              <Card>
                <Thumbnail/>
                <CardText>
                  <CardTitle>
                    <Link href="/">
                      [무료 웨비나] CRM 마케팅 성공 사례 모음.zip
                    </Link>
                  </CardTitle>
                  <CardSummary>CRM 마케팅의 성공 요인, 핵심만 모아 보기</CardSummary>
                </CardText>
              </Card>
              <Card>
                <Thumbnail/>
                <CardText>
                  <CardTitle>
                    <Link href="/">
                      [무료 웨비나] CRM 마케팅 성공 사례 모음.zip
                    </Link>
                  </CardTitle>
                  <CardSummary>CRM 마케팅의 성공 요인, 핵심만 모아 보기</CardSummary>
                </CardText>
              </Card>
              <Card>
                <Thumbnail/>
                <CardText>
                  <CardTitle>
                    <Link href="/">
                      [무료 웨비나] CRM 마케팅 성공 사례 모음.zip
                    </Link>
                  </CardTitle>
                  <CardSummary>CRM 마케팅의 성공 요인, 핵심만 모아 보기</CardSummary>
                </CardText>
              </Card>
            </Flex>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
const Section = styled.section`
  background: #f8f8f8;
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
const TitleWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto 100px;
  @media (max-width: 767px) {
    padding-bottom: 25px;
    border-bottom: 1px solid #cbcbcb;
  }
`
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  } ;
`;
const SubTitle = styled.p`
  color: #227eff;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  } ;
`;
const Date = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  @media (max-width: 767px) {
    font-size: 1rem;
  } ;
`;
const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 150px;
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  text-align: left;
  @media (max-width: 767px) {
    font-size: 1rem;
  } ;
`;
const CoverImage = styled.div`
  background: #000;
  border-radius: 1rem;
  width: 100%;
  height: 400px;
  @media (max-width: 767px) {
    height: 200px;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  @media (max-width: 767px) {
    display: block;
  }
`
const Card = styled.article`
  width: 32%;
  position: relative;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background: #fff;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const Thumbnail = styled.div`
  background: #000;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 240px;
  @media (max-width: 767px) {
    border-radius: 8px 8px 0 0;
    height: 180px;
  }
`
const CardText = styled.div`
  padding: 2rem;
  height: 150px;
  text-align: left;
  @media (max-width: 767px) {
    padding: 30px 1rem;
    height: auto;
  }
`
const CardTitle = styled.h4`
  font-size: 1.25rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`
const CardSummary = styled.p`
  font-size: 1rem;
  padding-top: 1rem;
  color: #979797;
  @media (max-width: 767px) {
    font-size: .8rem;
  }
`