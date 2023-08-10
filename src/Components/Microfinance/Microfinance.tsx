import React from "react";
import Container from "../CommonComponents/Container";
import Section from "../CommonComponents/Section";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";

const MicrofinanceWorkList = () => {
  const microData = getArrayFromObj(data.microfinance.process_to_microfinance);
  console.log(microData);
  return (
    <ol className="list-decimal">
      {microData.map((item) => (
        <li key={item.key} className="py-1">
          {item.value}
        </li>
      ))}
    </ol>
  );
};

const Microfinance = () => {
  return (
    <Container>
      <Section title={data.microfinance.title} description={<MicrofinanceWorkList />}></Section>
    </Container>
  );
};

export default Microfinance;
