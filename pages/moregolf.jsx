import * as React from "react";
import styled from "@emotion/styled";
import Layout from "@/layouts/Layout";
import Image from "next/image";

export default function MoreGolf() {

  return (
    <Layout>
      {/* greeting */}
      <Section style={{background: '#181818'}}>
        <Container>
          <Image src="/images/mk-greeting.jpg" alt="greeting" width={860} height={2200} />
        </Container>
      </Section>

        <Container>
          <Flex>
            {/* userNeeds */}
            <Item>
              <Image src="/images/mk-needs.jpg" alt="needs" width={860} height={1100} />
            </Item>
            {/* ourSolution */}
            <Item>
              <Image src="/images/mk-solution.jpg" alt="solution" width={860} height={1100} />
            </Item>
            {/* priceInfo */}
            <Item>
              <Image src="/images/mk-price.jpg" alt="price" width={860} height={1970} />
            </Item>
            {/* programOverview */}
            <Item>
              <Image src="/images/mk-overview.jpg" alt="overview" width={860} height={1100} />
            </Item>
            {/* details */}
            <Item>
              <Image src="/images/mk-details01.jpg" alt="details01" width={860} height={3164} />
            </Item>
            <Item>
              <Image src="/images/mk-details02.jpg" alt="details02" width={860} height={2086} />
            </Item>
            <Item>
              <Image src="/images/mk-details03.jpg" alt="details03" width={860} height={3184} />
            </Item>
            <Item>
              <Image src="/images/mk-details04.jpg" alt="details04" width={860} height={2125} />
            </Item>
          </Flex>
        </Container>

        {/* projectProcess */}
        <Section style={{background: '#000'}}>
          {/* <ProcessBackground className="process" /> */}
          <Container>
            <Image src="/images/mk-process01.jpg" alt="process" width={860} height={1360} />
          </Container>
        </Section>
    </Layout>
  );
}
const Section = styled.section`
  position: relative;
`;
const ProcessBackground = styled.div`
  background-image: url('images/mk-process-bg.png');
  position: absolute;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
`
const Container = styled.div`
  /* width: 1200px; */
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1279px) {
    width: 100%;
  }
  @media (max-width: 767px) {
  }
`;
const Flex = styled.div`
  display: grid;
`
const Item = styled.div`
`