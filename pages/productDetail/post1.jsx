import * as React from "react";
import styled from "@emotion/styled";
import Layout from "@/layouts/Layout";
import Link from "next/link";

export default function post1() {
  const blog = [
    {
      title: "[무료 웨비나] CRM 마케팅 성공 사례 모음.zip",
      summary: "CRM 마케팅의 성공 요인, 핵심만 모아 보기",
    },
    {
      title: "고객도 반기는 광고 문자 발송법",
      summary: "CRM 마케팅의 성공 요인, 핵심만 모아 보기",
    },
    {
      title: "030303",
      summary: "aaaaaaaa",
    },
  ];

  return (
    <Layout>
      <Section>
        <Container>
          <Grid>
            <ImageWrap />
            <TitleWrap>
              <Title>Basic Package</Title>
              <SubTitle>월 33만원 * 3개월 = 99만원 (정상가 140만원)</SubTitle>
              <p>3개월, 처음 시작하는 분들, 센터 규모 타석 7개 미만</p>
              <ul>
                <li>기본 상권, 고객 분석</li>
                <li>네이버 플레이스,검색 광고 최적화 및 세팅</li>
                <li>네이버 검색광고 세팅</li>
                <li>홈페이지 개설</li>
                <li>매장 촬영 (고화질 30장(보정))</li>
                <li>디자인 10개 (디지털 마케팅)</li>
                <li>월간리포트</li>
              </ul>
            </TitleWrap>
          </Grid>
          <div>
            <h2 style={{ marginTop: "400px" }}>다른 콘텐츠</h2>
            <Post>
              {blog.map((item, index) => {
                return (
                  <Card key={item.index}>
                    <Link href={`/blog/post${index + 1}`}>
                      <Thumbnail />
                      <CardText>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSummary>{item.summary}</CardSummary>
                      </CardText>
                    </Link>
                  </Card>
                );
              })}
            </Post>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
const Section = styled.section`
  background: #f8f8f8;
`;
const Container = styled.div`
  width: 1600px;
  margin: 0 auto;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 40px;
`;
const ImageWrap = styled.div`
  height: 650px;
  background: #000;
`;

const TitleWrap = styled.div`
  margin-left: 2rem;
  > ul {
    margin-top: 2rem;
    > li {
      line-height: 2rem;
      ::before {
        content: "";
        width: 15px;
        height: 15px;
        background: #000;
        border-radius: 16px;
        display: inline-block;
        margin-right: 8px;
      }
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 25px;
    border-bottom: 1px solid #cbcbcb;
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;
const SubTitle = styled.p`
  color: #47b589;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
const Date = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
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
  }
`;
const CoverImage = styled.div`
  background: #000;
  border-radius: 1rem;
  width: 100%;
  height: 400px;
  @media (max-width: 767px) {
    height: 200px;
  }
`;
const Post = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 767px) {
    display: block;
  }
`;
const Card = styled.article`
  position: relative;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background: #fff;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Thumbnail = styled.div`
  background: #000;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 240px;
  @media (max-width: 767px) {
    border-radius: 8px 8px 0 0;
    height: 180px;
  }
`;
const CardText = styled.div`
  padding: 2rem;
  height: 150px;
  text-align: left;
  @media (max-width: 767px) {
    padding: 30px 1rem;
    height: auto;
  }
`;
const CardTitle = styled.h4`
  font-size: 1.25rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
const CardSummary = styled.p`
  font-size: 1rem;
  padding-top: 1rem;
  color: #979797;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
