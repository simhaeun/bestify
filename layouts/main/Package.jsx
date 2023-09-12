import * as React from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Package = () => {
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

  return (
    <section>
      <Container>
        <Center data-aos="fade-in">
          <Title>이용요금</Title>
        </Center>

        <Grid data-aos="fade-up" data-aos-delay="150">
          <Card>
            <CardHeader>
              <span className="tooltip">연간 결제 시 16% 할인</span>
              {/* tooltip - 300만원(VAT 별도) */}
              <h4>🌱 스탠다드 패키지</h4>
              <p>월 30만원으로 마케팅 고민 해결하세요</p>
              <h2>300,000<span className="sm">원 / 월</span><span className="xs">VAT별도</span></h2>
            </CardHeader>
            <CardCont>
              <ul>
                <li>골프연습장 <strong>전용 프로그램 제공</strong><br />
                  <span className="sm">(매출, 회원, 상담 관리)</span>
                </li>
                <li>자영업 필수 플랫폼 <strong>개설 & 광고 세팅</strong><br />
                  <span className="sm">(네이버, 페이스북, 인스타그램)</span>
                </li>
                <li>온라인용 <strong>디자인 제작</strong> 10건<br />
                  <span className="sm">(광고 컨텐츠, 홍보용 이미지 등)</span>
                </li>
                <li>월간 <strong>리포트 제공</strong><br />
                  <span className="sm">(성과보고, 맞춤 마케팅 제안)</span>
                </li>
              </ul>
            </CardCont>
          </Card>
          <Card>
            <CardHeader>
              <span className="tooltip">연간 결제 시 16% 할인</span>
              {/* tooltip - 500만원(VAT 별도) */}
              <h4>💪 올인원 패키지</h4>
              <p>50만원으로 우리 동네 1등 골프연습장 되기!</p>
              <h2>500,000<span className="sm">원 / 월</span><span className="xs">VAT별도</span></h2>
            </CardHeader>
            <CardCont>
              <ul>
                <li><span className="lg"><span className="underline">스탠다드 패키지</span>의 모든 기능!</span></li>
                <li>플랫폼 광고 세팅 <strong>당근마켓 추가</strong></li>
                <li><strong>블로그리뷰</strong> 10건, <strong>방문자리뷰</strong> 20건 추가</li>
                <li>자체 <strong>홈페이지 개설 및 관리</strong></li>
                <li>디자인 제작 <strong>15건</strong>으로 확대</li>
              </ul>
            </CardCont>
          </Card>
          <Card>
            <CardHeader>
              <span className="tooltip" style={{marginRight: '10px'}}>오픈매장 할인 월 80만원</span>
              <span className="tooltip">일시납부 시 30% 할인</span>
              {/* tooltip - 300만원(VAT 별도) */}
              <h4>🪜 빌드업 패키지</h4>
              <p>6개월 프로젝트, 온라인 마케팅이 처음인 분들께!</p>
              <h2>1,000,000<span className="sm">원 / 월</span><span className="xs">VAT별도</span></h2>
            </CardHeader>
            <CardCont>
              <ul>
                <li><span className="lg"><span className="underline">올인원 패키지</span>의 모든 기능!</span></li>
                <li>매장 <strong>사진촬영 1회</strong></li>
                <li><strong>전단지 제작 & 배포 1회 (8,000부)</strong></li>
                <li>포털사이트 지도 등록<br/>
                  <span>(네이버지도, 카카오맵, T맵, 구글, 페이스북)</span>
                </li>
                <li><strong>인스타그램 리뷰</strong>(3건) & <strong>파워블로거 리뷰</strong>(3건)</li>
              </ul>
            </CardCont>
          </Card>
        </Grid>

      </Container>
    </section>
  );
};
export default Package;

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
const Grid = styled.article`
  width: 100%;
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
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
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const CardHeader = styled.div`
  padding: 3rem;
  line-height: 1.4;
  border-bottom: 1px solid #EEF2F7;
  h2 {
    line-height: 2;
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
  p {
    font-size: 1rem;
    color: #6C757D;
  }
  span {
    font-weight: 400;
    color: #98A6AD;
    &.sm {font-size: 1rem; padding-left: 6px;}
    &.xs {font-size: .8rem; padding-left: 4px;}
    &.tooltip {
      background: #DBFFF2;
      color: #03C780;
      padding: 5px 15px;
      border-radius: 10px;
      margin-bottom: 1rem;
      display: inline-block;
      font-size: .8rem;
      font-weight: 600;
    }
  }

  /* 수정하라 */
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
  padding: 2.5rem 3rem;
  > ul > li {
    margin-top: .9rem;
    font-size: .9rem;
    ::before {
      content: '✓';
      width: 15px;
      height: 15px;
      color: #03C780;
      display: inline-block;
      margin-right: 6px;
    }
  }
  span {
    font-weight: 400;
    color: #6C757D;
    font-size: .8rem;
    line-height: 1.6rem;
    margin-left: 1.2rem;
    &.lg {
      font-size: 1.1rem; color: #000; font-weight: 600; margin: 0;
    }
    .underline {
      font-size: 1.1rem;
      color: #03C780;
      font-weight: 600;
      margin: 0;
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
