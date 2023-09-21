import * as React from "react";
import styled from "@emotion/styled";

const Floating = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  background: #0fb97b;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  font-size: 1.2rem;
  z-index: 999;
  @media (max-width: 1279px) {
    right: 25px;
    bottom: 25px;
    width: 50px;
    height: 50px;
    font-size: .8rem;
  }
`;

export default function Talk() {
  return (
    <Floating>Talk</Floating>
  );
}
