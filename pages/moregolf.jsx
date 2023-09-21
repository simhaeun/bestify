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
          <Image src="/images/mk-greeting.jpg" alt="mk01" width={860} height={2200} />
        </Container>
      </Section>

        <Container>
          <Flex>
            {/* userNeeds */}
            <Item>
              <Image src="/images/mk-needs.jpg" alt="mk01" width={860} height={1100} />
            </Item>
            {/* ourSolution */}
            <Item>
              <Image src="/images/mk-solution.jpg" alt="mk01" width={860} height={1100} />
            </Item>
            {/* priceInfo */}
            <Item>
              <Image src="/images/mk-price.jpg" alt="mk01" width={860} height={1970} />
            </Item>
            {/* programOverview */}
            <Item>
              <Image src="/images/mk-overview.jpg" alt="mk01" width={860} height={1100} />
            </Item>
            {/* details */}
            <Item>
              <Image src="/images/mk-details.jpg" alt="mk01" width={860} height={8500} />
            </Item>
          </Flex>
        </Container>

        {/* projectProcess */}
        <Section style={{background: '#000'}}>
          <Container>
            <Image src="/images/mk-process.jpg" alt="mk01" width={860} height={1360} />
          </Container>
        </Section>
    </Layout>
  );
}

const Section = styled.section`
`;
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