import React from "react";
import { useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";

export const Table = ({ size, variant, color, children, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <>
      <MaterialButton
        ref={(ref) => connect(drag(ref))}
        size={size}
        variant={variant}
        color={color}
      >
        {children}
      </MaterialButton>
    </>
  );
};

// export default Table;
