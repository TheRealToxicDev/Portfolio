import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            title,
            titleClassName,
            description,
            className,
            img,
            imgClassName,
            spareImg,
            id,
          }) => (
            <BentoGridItem
              title={title}
              description={description}
              id={id}
              key={id}
              className={className}
              img={img}
              spareImg={spareImg}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
