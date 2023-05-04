import * as React from "react";
import styled from "@emotion/styled";
import Layout from "@/layouts/Layout";
import Link from "next/link";

export default function BlogPage() {
  const blog = [
    {
      title: "[무료 웨비나] CRM 마케팅 성공 사례 모음.zip",
      summary: "CRM 마케팅의 성공 요인, 핵심만 모아 보기",
    },
    {
      title: "고객도 반기는 광고 문자 발송법",
      summary: "CRM 마케팅의 성공 요인, 핵심만 모아 보기",
    }
  ];

  const blog2 = [
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
    {
      title: "고객도 반기는 광고 문자 발송법",
      summary: "CRM 마케팅의 성공 요인, 핵심만 모아 보기",
    },
  ];

  return (
    <Layout>
      <Section>
        <Container>
          <TitleWrap>
            <Title>블로그</Title>
            <Text>최신 소식과 인사이트가 담긴 콘텐츠를 확인하세요.</Text>
          </TitleWrap>
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

          <Latest>
            <h4>최신 포스트</h4>
            <Categories></Categories>
            <Post2>
              {blog2.map((item, index) => {
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
            </Post2>
          </Latest>


        </Container>
      </Section>
    </Layout>
  );
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
    padding: 50px 1.5rem 0;
  }
  @media (max-width: 767px) {
  }
`;
const TitleWrap = styled.div`
  margin-bottom: 50px;
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 2.25rem;
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
const Post = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1297px) {
    grid-template-columns: 1fr;
  }
`;
const Post2 = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1297px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.article`
  position: relative;
  border-radius: 1rem;
  background: #fff;
  transition: all 1s linear;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
    transition-duration: 0.5s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03), 0 2px 5px rgba(0, 0, 0, 0.03);
  }
  @media (max-width: 1297px) {
    width: 100%;
    border-radius: 8px;
  }
`;
const Thumbnail = styled.div`
  background: #000;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 240px;
  @media (max-width: 767px) {
    border-radius: 8px 8px 0 0;
    height: 200px;
  }
`;
const CardText = styled.div`
  padding: 2rem;
  height: 160px;
  text-align: left;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 30px 1rem;
    height: auto;
  }
`;
const CardTitle = styled.h4`
  width: 100%;
  font-size: 24px;
  @media (max-width: 767px) {
    font-size: 1.25rem;
  }
`;
const CardSummary = styled.p`
  font-size: 1rem;
  padding-top: 1rem;
  color: #979797;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;


const Latest = styled.div`
  margin-top: 100px;
  > h4 {
    font-size: 2rem;
    margin-bottom: 50px;
  }
`
const Categories = styled.div``