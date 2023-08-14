import React from "react";
import Container from "../CommonComponents/Container";
import { customText_2, listText_3, sectionTitle } from "../../Utils/customStyles";
import SkewedBacground from "../CommonComponents/SkewedBackground";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";

const Terms = () => {
  const termsData = getArrayFromObj(data.terms.itemsList);
  return (
    <SkewedBacground>
      <div className={`relative ${sectionTitle} md:pl-24 pl-12 text-left  pt-14 m-auto`}>{data.terms.title}</div>
      <Container className={`relative border rounded-lg max-h-[600px] overflow-scroll shadow-md !mt-4 ${customText_2} `}>
        <ol className={`list-decimal space-y-4 pl-6`}>
          {termsData.map((item) => (
            <li key={item.key}>{item.value}</li>
          ))}
        </ol>
      </Container>
    </SkewedBacground>
  );
};

export default Terms;
