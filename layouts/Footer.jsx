import styled from "@emotion/styled";
import { Yuji_Boku } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Section>
      <Container>
        <LogoWrap>
          <Image src="/images/morg-logo-w.png" alt="logoImage" width={100} height={20} />
        </LogoWrap>

        <Flex>
          <div>
            <p>주식회사 모그</p>
            <p>서울특별시 강남구 역삼동</p>
            <p>사업자 등록번호: 867-81-02415</p>
            <span style={{fontSize: '12px'}}>Copyright ⓒ Morg All rights reserved.</span>
          </div>

          <Flex>
            <ul>
              <li>고객센터</li>
              <li>공지사항</li>
              <li>사용 가이드</li>
              <li>자주 묻는 질문</li>
              <li>온라인 상담</li>
            </ul>
            <ul>
              <li>SNS</li>
              <li>블로그</li>
              <li>Instagram</li>
            </ul>
            <ul>
              <li>Terms and Policy</li>
              <li><Link href="/agreement/terms">이용약관</Link></li>
              <li><Link href="/agreement/privacy-policy">개인정보 처리방침</Link></li>
            </ul>
          </Flex>
        </Flex>

      </Container>
    </Section>
  );
};
export default Footer;

const Section = styled.footer`
  background: #305b49;
  color: #ccc;
  padding: 30px 0;
  /* border-top: 1px solid rgb(232, 235, 237); */
  @media (max-width: 767px) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
const LogoWrap = styled.div`
  margin-bottom: 30px;
`;
const Flex = styled.div`
  display: flex;
  line-height: 2;
  font-size: .9rem;
  letter-spacing: -.08px;
  justify-content: space-between;
  > ul {
    margin-left: 80px;
    > li:nth-child(1) {
      font-weight: 600;
    }
  }
  @media (max-width: 1200px) {
    & > li {
      font-size: 14px;
    }
  }
  @media (max-width: 767px) {
    & > li {
      font-size: 12px;
    }
  }
`;
const MobileHide = styled.li`
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Mobile = styled.ul`
  display: none;
  line-height: 1.6em;
  & > li {
    position: relative;
    list-style: none;
    color: #a7a7aa;
    font-size: 16px;
    padding: 0 0.5rem 0 0;
    ::before {
      content: "";
      border-left: 1px solid rgb(228, 228, 229);
      padding: 0 0 0 0.5rem;
    }
    :nth-child(1)::before {
      content: none;
    }
  }
  @media (max-width: 1200px) {
    display: block;
    & > li {
      font-size: 14px;
    }
  }
  @media (max-width: 767px) {
    & > li {
      font-size: 12px;
    }
  }
`;
