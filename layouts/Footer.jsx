import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Section>
      <Container>
        <LogoWrap>
          <Image src="/morg-logo.png" alt="logoImage" width={100} height={20} />
        </LogoWrap>
        <Flex>
          <div>
            <p><strong>주식회사 모그</strong></p>
            <p>서울특별시 강남구 도곡동 187-1</p>
            <p>사업자 등록번호: 867-81-02415</p>
            <span style={{fontSize: '12px'}}>Copyright ⓒ Morg All rights reserved.</span>
          </div>
          <Flex>
            <ul>
              <li>고객센터</li>
              {/* <li>공지사항</li> */}
              <li>
              <Link href="https://delicious-seahorse-726.notion.site/GUIDE-1a669526370d45ff89204b1cec37c438?pvs=4" target="_blank">이용 가이드</Link></li>
              {/* <li>자주 묻는 질문</li> */}
              {/* <li>온라인 상담</li> */}
            </ul>
            <ul>
              <li>SNS</li>
              <li><Link href="https://blog.naver.com/morgkorea" target="_blank">블로그</Link></li>
              <li><Link href="https://www.instagram.com/morg_korea/" target="_blank">Instagram</Link></li>
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
  background: #f0f3f5;
  color: #484848;
  padding: 30px 0;
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
    padding: 1rem 2rem;
  }
`;
const LogoWrap = styled.div`
  margin-bottom: 30px;
  @media (max-width: 767px) {
    margin-bottom: 1rem;
    > img {
      width: 72px;
    }
  }
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
    display: block;
    font-size: .8rem;
    > ul {
      display: none; /* 추후 -> display: flex; 로 변경 */
      margin-left: 0px;
      > li {
        font-size: .8rem;
        margin-right: 6px;
      }
    }
    > ul:first-child {
      margin-top: 1rem;
    }
  }
`;