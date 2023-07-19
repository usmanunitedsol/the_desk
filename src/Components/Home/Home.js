import React from "react";
import Bannar from "./Bannar";
import Join_us from "./Join_us";
import CoworkingSection from "./CoworkingSection";
import ExploreCowork from "./ExploreCowork";
import MembershipSection from "./MembershipSection";
import BenefitsDesk from "./BenefitsDesk";
import TrustedCompanies from "./TrustedCompanies";

const Home = () => {
  return (
    <>
      <Bannar/>                  
      <Join_us/>
      <CoworkingSection/>
      <ExploreCowork/>
      <MembershipSection/>
      <BenefitsDesk/>
      <TrustedCompanies/>
    </>
  );
};

export default Home;
