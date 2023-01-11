// pages/index.js
import React from "react";
import { Paper, Grid, Typography } from "@mui/material";

import { Toolbox } from "./Components/Toolbox";
import { SettingsPanel } from "./Components/SettingsPanel";
import { Topbar } from "./Components/Topbar";
import { CardTop } from "./Components/User/Card";
import { CardBottom } from "./Components/User/Card";
import { Container } from "./Components/User/Container";
import { Button } from "./Components/User/Button";
import { Card } from "./Components/User/Card";
import { ThreeColumn, ThreeColumnChild } from "./Components/User/ThreeColumn";
import { Text } from "./Components/User/Text";
import { Image, ImageChild } from "./Components/User/Image";
import { FourColumn, FourColumnChild } from "./Components/User/FourColumn";
import {
  DoubleColumn,
  DoubleColumnChild,
} from "./Components/User/DoubleColumn";
import { Column, ColumnChild } from "./Components/User/Column";

import { Editor, Frame, Element } from "@craftjs/core";
import { Class } from "@mui/icons-material";
import { Table } from "./Components/User/Table";

// import { ThreeColumnChild } from "./Components/User/ThreeColumn";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        The Page Editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          CardTop,
          CardBottom,
          Container,
          Paper,
          Column,
          ColumnChild,
          DoubleColumn,
          DoubleColumnChild,
          ThreeColumn,
          ThreeColumnChild,
          FourColumn,
          FourColumnChild,
          Image,
          // ImageChild,
          Table,
        }}
      >
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          {/* <Topbar /> */}
          <Grid item xs style={{ width: "250px" }}>
            <Frame>
              <Element is={Container} padding={5} background="#456" canvas>
                <Card />
                <Container padding={5} height="10vh" background="#eee">
                  {/* <Container padding={5} height="55vh" background="#ee0"> */}
                  {/* </Container> */}
                  <Button size="small" variant="outlined">
                    Click
                  </Button>
                  <Text size="small" text="Hi world!" />
                  {/* <Text /> */}
                  <Container padding={6} background="#999">
                    <Element
                      is={Container}
                      padding={2}
                      background="#999"
                      canvas
                    ></Element>
                  </Container>
                </Container>
              </Element>
            </Frame>
          </Grid>
          <Grid item lg={1}>
            <Paper style={{ width: "250px" }} className={Class.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
