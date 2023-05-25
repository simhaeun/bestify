import * as React from "react";
import { Typography } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const AccordionWrap = styled(Accordion)`
  border: none;
  box-shadow: none;
  background: none;
  ::before {
    display: none;
  }
  & ul {
    padding: 1rem;
  }
  > div h6 {
    color: #ccc;
  }
  > div.Mui-expanded h6 {
    color: #47b589;;
    font-weight: 600;
  }
`;

export default function AccordionText() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <AccordionWrap
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <Typography variant='h6'>멀티 채널 광고 관리, 운영 대행</Typography>
        </AccordionSummary>
        <ul>
          <li>네이버 플레이스 최적화</li>
          <li>검색 광고 세팅</li>
          <li>페이스북, 인스타그램 광고</li>
          <li>인플루언서</li>
        </ul>
      </AccordionWrap>

      <AccordionWrap
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
            <Typography variant='h6'>매장 운영에 필요한 각종 업무 대행</Typography>
        </AccordionSummary>
        <ul>
          <li>디자인, 출력, 배포</li>
          <li>사이트 제작</li>
          <li>프로필, 매장 촬영</li>
        </ul>
      </AccordionWrap>
    </>
  );
}
