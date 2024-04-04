import React from "react";

type Props = {
  title: string;
  handleSelect: () => void;
  selected: boolean;
};

const ProjectCard = (props: Props) => {
  const { title, handleSelect, selected } = props;
  return (
    <div className="group relative flex w-full flex-col">
      <div className="absolute -left-[12px] top-[6px] h-[calc(100%_+_24px)] w-[calc(100%_+_24px)] bg-white" />
      <div
        className="overflow-hiddenpx-4 z-10"
        onClick={() => {
          if (title === "- - - - - -") return;
          handleSelect();
        }}
        style={{
          background: selected ? "white" : "black",
          color: selected ? "black" : "white",
        }}
      >
        <p className="truncate text-nowrap text-3xl leading-none  sm:text-6xl lg:text-8xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
