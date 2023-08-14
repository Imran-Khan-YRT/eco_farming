import React from "react";
import Container from "../CommonComponents/Container";
import { customText_1, customText_2, listText_3, sectionTitle } from "../../Utils/customStyles";
import SkewedBacground from "../CommonComponents/SkewedBackground";
import data from "../../assets/combined/en/translation.json";
import { getArrayFromObj } from "../../Utils/util";

const Privacy = () => {
  const privacyData = getArrayFromObj(data.privacy.itemList);
  return (
    <SkewedBacground>
      <div className={`relative ${sectionTitle} md:pl-24 pl-12 text-left  pt-14 m-auto`}>Privacy and Policy</div>
      <Container className={`relative border rounded-lg h-[600px] overflow-scroll !mt-4 ${customText_2} `}>
        <p className="pb-6">{data.privacy.descHeader}</p>
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
