import Chip from "@/components/Chip";
import React from "react";

const SectionInfo = ({
  chipTitle,
  title,
  subtitle,
}: { chipTitle: string; title: string; subtitle: string }) => {
  return (
    <>
      <Chip>{chipTitle}</Chip>
      <h2 className="font-semibold text-3xl md:text-4xl text-center">
        {title}
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-center">{subtitle}</p>
    </>
  );
};

export default SectionInfo;
