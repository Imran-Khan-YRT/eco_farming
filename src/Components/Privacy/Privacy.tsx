import React from "react";
import Container from "../CommonComponents/Container";
import { customText_2, mobileViewPadding, sectionTitle } from "../../Utils/customStyles";
import SkewedBacground from "../CommonComponents/SkewedBackground/SkewedBackground";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";

const Privacy = () => {
  const privacyData = getArrayFromObj(data.privacy.itemList);
  return (
    <SkewedBacground>
      <div className={`relative ${sectionTitle} md:pl-24 pl-12 text-left m-auto ${mobileViewPadding}`}>{data.privacy.title}</div>
      <Container className={`relative border rounded-lg max-h-[600px] overflow-scroll shadow-md !mt-4 ${customText_2} `}>
        <p className="pb-6">{data.privacy.descriptionInitial}</p>
        <ol className={`list-decimal space-y-4 pl-6`}>
          {privacyData.map((item) => (
            <li key={item.key}>{item.value}</li>
          ))}
        </ol>
      </Container>
    </SkewedBacground>
  );
};

export default Privacy;
