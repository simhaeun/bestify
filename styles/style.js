import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const Container1420 = styled.div`
  width: 1420px;
  margin: 0 auto;
  @media (max-width: 1279px) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
export const Center = styled.div`
  text-align: center;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 25px;
  height: min-content;
  justify-content: flex-start;
`;

export const Grid = styled.article`
  width: 100%;
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 20px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1023px) {
    display: block;
    margin: 1.5rem 0;
  }
`;

export const GridItem = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
  padding: 24px;
  @media (max-width: 1023px) {
    height: 280px;
    margin-bottom: 80px;
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 1023px) {
    display: block;
    margin-top: 100px;
    &:nth-child(even) {
      display: flex;
      flex-wrap: wrap-reverse;
      flex-direction: column-reverse;
      > div {
        width: 100%;
      }
    }
  }
  @media (max-width: 1023px) {
    margin-top: 80px;
  }
`;

export const Card = styled.div`
  border-radius: 24px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
  text-align: left;
  color: #333;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  padding: 3rem;
  line-height: 1.4;
  border-bottom: 1px solid #eef2f7;
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
    color: #6c757d;
  }
  span {
    font-weight: 400;
    color: #98a6ad;
    &.sm {
      font-size: 1rem;
      padding-left: 6px;
    }
    &.xs {
      font-size: 0.8rem;
      padding-left: 4px;
    }
    &.tooltip {
      background: #dbfff2;
      color: #0fb97b;
      padding: 5px 15px;
      border-radius: 10px;
      margin-bottom: 1rem;
      display: inline-block;
      font-size: 0.8rem;
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

export const CardCont = styled.div`
  border-radius: 0 0 24px 24px;
  padding: 2.5rem 3rem;
  > ul > li {
    margin-top: 0.9rem;
    font-size: 0.9rem;
    ::before {
      content: "✓";
      width: 15px;
      height: 15px;
      color: #0fb97b;
      display: inline-block;
      margin-right: 6px;
    }
  }
  span {
    font-weight: 400;
    color: #6c757d;
    font-size: 0.8rem;
    line-height: 1.6rem;
    margin-left: 1.2rem;
    &.lg {
      font-size: 1.1rem;
      color: #000;
      font-weight: 600;
      margin: 0;
    }
    .underline {
      font-size: 1.1rem;
      color: #0fb97b;
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

export const LeftTextBox = styled.div`
  text-align: left;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  height: min-content;
  justify-content: flex-start;
`;

export const RightTextBox = styled.div`
  text-align: right;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  height: min-content;
  justify-content: flex-start;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  > img {
    border-radius: 1rem;
  }
  @media (max-width: 1023px) {
    margin-top: 1.5rem;
  }
  @media (max-width: 767px) {
    margin-top: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2em;
  letter-spacing: -0.4px;
  font-weight: 600;
  @media (max-width: 1023px) {
    font-size: 2.25rem;
  }
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h4`
  font-size: 1.4rem;
  color: #0fb97b;
  @media (max-width: 767px) {
    letter-spacing: -0.4px;
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`;

export const SubTitle2 = styled.h4`
  font-size: 1.2rem;
  line-height: 1.5em;
  font-weight: 400;
  letter-spacing: -0.4px;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const Text2 = styled.p`
  font-size: 18px;
  letter-spacing: -0.4px;
  line-height: 1.6em;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const AnimationWrap = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const AdvantageGrid = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  grid-template-rows: repeat(2);
  gap: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #191919;
  > div {
    padding: 6rem 4rem;
    border-radius: 1rem;
    > h4 {
      font-size: 2rem;
      line-height: 40px;
    }
  }
  > div:nth-child(1) {
    position: relative;
    grid-column: 1 / 3;
    background: #eff6ff;
    > img {
      position: absolute;
      right: 100px;
      bottom: 0px;
    }
  }
  > div:nth-child(2) {
    background: #fff7fc;
  }
  > div:nth-child(3) {
    background: #fffff2;
  }
  @media (max-width: 767px) {
    margin: 3rem 0;
    > div {
      padding: 3rem 2rem;
      > h4 {
        font-size: 1.25rem;
      }
      > p {
        font-size: 0.9rem;
        display: inline;
      }
    }
    > div:nth-child(1) {
      position: relative;
      grid-column: 1;
      background: #eff6ff;
      > img {
        display: none;
      }
    }
    > div:nth-child(2) {
      background: #efffef;
      > h4 {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const Profile = styled.div`
  margin-top: -80px;
  height: 165px;
  > img {
    border-radius: 100px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.05), 0 0 5px rgba(0, 0, 0, 0.05);
    @media (max-width: 767px) {
      width: 120px;
      height: 120px;
    }
  }
  @media (max-width: 767px) {
    height: 120px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  height: 180px;
  > h6 {
    font-weight: 600;
  }
  > p {
    letter-spacing: -0.6px;
    color: #333;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 25px auto;
  border-radius: 60px;
  height: 60px;
  line-height: 60px;
  padding: 0 52px;
  font-size: 21px;
  cursor: pointer;
  background: #0fb97b;
  font-weight: 600;
  border: none;
  color: #fff;
  transition: 0.5s;
  &:hover {
    background: #dbfff2;
    color: #0fb97b;
    transition: 0.5s;
  }
  @media (max-width: 767px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

export const FreeBtn = styled.button`
  padding: 1rem 3rem;
  font-size: 1rem;
  border-radius: 60px;
  line-height: 1.2em;
  cursor: pointer;
  background-color: #0fb97b;
  font-size: 20px;
  font-weight: 600;
  border: none;
  color: #fff;
  transition: 0.5s;
  &:hover {
    background: #dbfff2;
    color: #0fb97b;
    transition: 0.5s;
  }
`;
