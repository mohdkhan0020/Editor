// components/user/Card.js
import React from "react";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { ContainerDefaultProps } from "./Container";
import { ContainerSettings } from "./Container";
import { Text } from "./Text";
import ContentEditable from "react-contenteditable";
import { Button } from "./Button";
import { Element, useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@mui/material";
import { FaBeer,FaParagraph } from 'react-icons/fa';
import { BsFillImageFill } from 'react-icons/bs';
import { RxButton } from 'react-icons/rx';
import { FormControl } from "@mui/material";
import General from "../Settings/General";
import Decorations from "../Settings/Decorations";
import Dimension from "../Settings/Dimension";
import Typography from "../Settings/Typography";
import Flex from "../Settings/Flex";

import { Container } from "./Container";


export const Column = ({
  text,
  children,
  fontSize,
  textAlign,
  color,
  fontFamily,
  position,
  width,
  height,
  maxWidth,
  minHeight,
  fontWeight,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  opacity,
  display,
  top,
  right,
  left,
  bottom,
  float,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  textDecoration,
  textShadow,
  letterSpacing,
  lineHeight,
  border,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  flexGrow,
  flexShrink,
  flexBasis,
  borderStyle,
  borderWidth,
  background,
  padding,
}) => {
  const [element, setelement] = useState(null)
  const [controls, setcontrols] = useState(true)
  function show(element) {
    if(element==="Button"){
      return <Element id='90' style={{height:"100px"}} is={Container}>
        <Button>jj</Button></Element>
    }
    if(element==="Paragraph"){
      return <Element id='90' style={{height:"100px"}} is={Container}>
         <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque voluptatibus quisquam ex amet dolores qui accusamus? Voluptate facere perferendis nesciunt rerum excepturi earum. Autem molestias rem natus possimus enim veritatis hic omnis magnam minus, nobis incidunt in aut amet vero dignissimos et nesciunt excepturi quas quaerat. Esse, nemo vel." fontSize={20} /></Element>
    }
    if(element==="Image"){
      return <Element id='90' style={{height:"100px"}} is={Container}>
      <h1>Imagenotfound</h1></Element>
    }
    
  }
console.log(element);
  return (
    <Paper
      style={{
        text,
        children,
        fontSize,
        textAlign,
        color,
        fontFamily,
        position,
        width,
        height,
        maxWidth,
        minHeight,
        fontWeight,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        opacity,
        display,
        top,
        right,
        left,
        bottom,
        float,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        paddingTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
        textDecoration,
        textShadow,
        letterSpacing,
        lineHeight,
        border,
        flexDirection,
        justifyContent,
        alignItems,
        alignSelf,
        flexGrow,
        flexShrink,
        flexBasis,
        borderStyle,
        borderWidth,
        background,
        padding,
      }}
      background={background}
      padding={padding}
      height={`100px`}
      className="kkkkk"
    >{
      controls?<div style={{display:"flex",justifyContent:"space-evenly"}}>
      <div>
       <div onClick={()=>{setelement("Image")
      setcontrols(false)
      }} style={{background:"rgb(198,200,199)",height:"86px",width:"86px",borderRadius:"50%"}}>
         <BsFillImageFill style={{margin:"19px"}}/> 
         </div>
         <p style={{fontSize:"22px"}}>Add Image</p>
       </div>
       <div>
       <div onClick={()=>{setelement("Paragraph")
        setcontrols(false)}} style={{background:"rgb(198,200,199)",height:"86px",width:"86px",borderRadius:"50%"}}>
         <FaParagraph style={{margin:"19px"}}/> 
         </div>
         <p style={{fontSize:"22px"}}>Add Paragraph</p>
       </div>
       <div>
       <div onClick={()=>{setelement("Button")
       setcontrols(false)}} style={{background:"rgb(198,200,199)",height:"86px",width:"86px",borderRadius:"50%"}}>
         <RxButton style={{margin:"19px"}}/> 
         </div>
         <p style={{fontSize:"22px"}}>Add Button</p>
       </div>

      </div>:null
    }
      {show(element)}
     
    </Paper>
  );
};

const ColumnSettings = () => {
  const {
    actions: { setProp },
    color,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));
  return (
    <>
    
      <FormControl size="small" component="fieldset">
        <Typography setprop={setProp} color={color} />
        <General setprop={setProp} color={color} />
        <Flex setprop={setProp} />
        <Decorations setprop={setProp} color={color} />
        <Dimension setprop={setProp} color={color} />
      </FormControl>
    </>
  );
};

Column.craft = {
  props: {
    text: "Hi",
    fontSize: 50,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: ColumnSettings,
  },
};
