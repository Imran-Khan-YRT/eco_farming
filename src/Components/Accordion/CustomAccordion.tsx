import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Container from "../CommonComponents/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import data from "../../assets/combined/en/translation.json";
import { useState } from "react";
import { sectionTitle } from "../../Utils/customStyles";

export default function CustomAccordion() {
  const questionsList = data.help.frequentlyAsked.questions;
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (position: number) => {
    if (position === expanded) {
      setExpanded(null);
    } else {
      setExpanded(position);
    }
  };

  // console.log(expanded);
  return (
    <Container margined={false} paddinged={true}>
      <div className={`${sectionTitle} text-center`}>{data.help.frequentlyAsked.title}</div>
      {questionsList.map((question) => (
        <Accordion expanded={expanded === question.id} onChange={() => handleChange(question.id)} key={question.id} className="!bg-tertiary !border !shadow-sm !rounded-md !mb-4">
          <AccordionSummary expandIcon={expanded === question.id ? <RemoveIcon /> : <AddIcon />}>
            <Typography sx={{ width: "90%", flexShrink: 0 }}>{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#fffcfc] !max-h-[250px] overflow-scroll">
            <Typography sx={{ fontWeight: "300", fontSize: "16px" }}>{question.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
