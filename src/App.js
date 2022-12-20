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
import { Text } from "./Components/User/Text";

import { Editor, Frame, Element } from "@craftjs/core";
import { Class } from "@mui/icons-material";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, CardTop, CardBottom, Container }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Container padding={5} background="#eee">
                  <Card />
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
                    >
                      {/* <Text size="small" text="It's me again!" /> */}
                    </Element>
                  </Container>
                </Container>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper className={Class.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
