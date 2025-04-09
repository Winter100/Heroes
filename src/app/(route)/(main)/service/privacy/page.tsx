import TermsGuide from "@/app/_components/service/TermsGuide";
import { PrivacyData } from "@/app/_constant/service/terms";
import React from "react";

const Page = () => {
  return <TermsGuide title="개인정보처리방침" data={PrivacyData} />;
};

export default Page;
