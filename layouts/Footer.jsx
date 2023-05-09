import styled from "@emotion/styled";
import Link from "next/link";

const Footer = () => {
  return (
    <Section>
      <Container>
        <Flex>
          <li>(주) 모그</li>
          <li>사업자 등록번호: 867-81-02415</li>
        </Flex>
        <Flex>
          <li>
            <Link href="/agreement/terms">이용약관</Link>
          </li>
          <li>
            <Link href="/agreement/privacy-policy">개인정보 처리방침</Link>
          </li>
          <MobileHide>Copyright ⓒ Morg All rights reserved.</MobileHide>
        </Flex>
        <Mobile>
          <li>Copyright ⓒ Morg All rights reserved.</li>
        </Mobile>
      </Container>
    </Section>
  );
};
export default Footer;

const Section = styled.footer`
  padding: 20px 0 60px;
  border-top: 1px solid rgb(232, 235, 237);
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
const Flex = styled.ul`
  display: flex;
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
`
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
