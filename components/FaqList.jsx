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
  border-bottom: 1px solid #ccc;
  ::before {
    display: none;
  }
  > div {
    padding: 1rem;
  }
  > div p {
    text-align: left;
    padding-bottom: 3rem;
    font-size: 1.2rem;
  }
  > div h4 {
    color: #ccc;
  }
  > div.Mui-expanded h4 {
    color: #0fb97b;
    font-weight: 600;
  }
`;

export default function FaqList() {
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
            <Typography variant='h4'>자주 하는 질문 1</Typography>
        </AccordionSummary>
        <div>
          <p>답변</p>
        </div>
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
            <Typography variant='h4'>자주 하는 질문 2</Typography>
        </AccordionSummary>
        <div>
          <p>답변</p>
        </div>
      </AccordionWrap>

      <AccordionWrap
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
            <Typography variant='h4'>자주 하는 질문 3</Typography>
        </AccordionSummary>
        <div>
          <p>답변</p>
        </div>
      </AccordionWrap>

      <AccordionWrap
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
            <Typography variant='h4'>자주 하는 질문 4</Typography>
        </AccordionSummary>
        <div>
          <p>답변</p>
        </div>
      </AccordionWrap>
    </>
  );
}
