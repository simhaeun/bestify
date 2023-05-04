import * as React from "react";
import styled from "@emotion/styled";
import Layout from "@/layouts/Layout";

const MarketingConsent = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <Title>마케팅 정보 수신동의 약관</Title>
          <p>
            모그 주식회사(이하 “회사” 또는 “모그“라 함)은 회사가 제공하는 서비스를
            운용함에 있어 각종 정보를 SMS, 이메일 등의 방법으로 회원에게 제공할
            수 있으며, 결제안내 등 의무적으로 안내되어야 하는 정보성 내용 및
            일부 혜택성 정보는 수신동의 여부와 무관하게 제공합니다.
          </p>
          <h6>수집 및 이용목적</h6>
          <p>
            새로운 콘텐츠(기능)의 안내 또는 이벤트 및 프로모션 등 광고성 정보
            제공을 위해 본 약관에 동의하신 회원님의 개인정보를 활용합니다. ‍
          </p>
          <h6>전송방법</h6>
          <p>SMS, 이메일 등으로 마케팅 정보를 전달합니다.</p>
          <h6>개인정보 이용</h6>‍
          <p>상세내역 이용하는 개인정보: 휴대전화번호, 이메일주소</p>
          <p>
            보유 이용 목적: 새로운 콘텐츠 안내, 이벤트 및 프로모션 등 정보 제공
          </p>
          <h6>개인정보 보유 및 이용 기간</h6>
          <p>
            마케팅 정보 수신 동의일로부터 회원 탈퇴 또는 마케팅 정보 수신 동의
            철회 시까지 보유 및 이용합니다.
          </p>
        </Container>
      </Section>
    </Layout>
  );
};
export default MarketingConsent;

const Section = styled.section`
  min-height: 90vh;
`;
const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  > h6 {
    padding: 50px 0 10px;
    font-size: 1.2rem;
    color: #333;
  }
  > p {
    line-height: 1.8;
  }
  @media (max-width: 1279px) {
    width: 100%;
    padding: 50px 1.5rem 0;
  }
`;
const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 700;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 2.25rem;
  }
`;
