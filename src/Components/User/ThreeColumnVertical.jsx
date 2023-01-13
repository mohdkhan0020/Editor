import React from "react";
import { Container } from "./Container";
import { Element } from "@craftjs/core";
import { useNode } from "@craftjs/core";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { VerticalColumn } from "./VerticalColumn";
import { DoubleColumnChild } from "./DoubleColumn";


export const VerticalThreeColumn = ({ background, padding }) => {
  return (
    <Container
      background={background}
      padding={padding}
      height={`125px`}
      width={`700px`}
      className="kkkkk"
      text=""
      display={"flex"}
      flexDirection={"Column"}
    >
      <Element id="VerticalThreeColumn" is={VerticalColumn} ></Element>
      <Element id="VerticalThreeColumn1" is={VerticalColumn} ></Element>
      <Element id="VerticalThreeColumn2" is={VerticalColumn} ></Element>
    </Container>
  );
};

VerticalThreeColumn.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings
    settings: ContainerSettings,
  },
};
