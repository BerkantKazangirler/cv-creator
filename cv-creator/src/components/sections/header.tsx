import { useState } from "react";

export const HeaderSection = () => {
  const [headerStyles, setHeaderStyles] = useState<{
    showTitle: boolean;
    showPhone: boolean;
    showLink: boolean;
    showExtraLink: boolean;
    showMail: boolean;
    showLocation: boolean;
    uppercaseName: boolean;
    showPhoto: boolean;
    showExtraField: boolean;
    showDOB: boolean;
    showNational: boolean;
    photoStyle: "FULL" | "CIRCLE";
  }>({
    showTitle: false,
    showPhone: false,
    showLink: false,
    showExtraLink: false,
    showMail: false,
    showLocation: false,
    uppercaseName: false,
    showPhoto: false,
    showExtraField: false,
    showDOB: false,
    showNational: false,
    photoStyle: "FULL",
  });

  return <div>HeaderSection</div>;
};
