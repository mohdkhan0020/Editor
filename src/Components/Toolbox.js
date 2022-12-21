// components/Toolbox.js
import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./User/Container";
import { Card } from "./User/Card";
import { Button } from "./User/Button";
import { Text } from "./User/Text";
import { Column } from "./User/Column";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Button text="Click me" size="small">
                  Button
                </Button>
              )
            }
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="contained"
          >
            Card
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Column />)}
            variant="contained"
          >
            Column
          </MaterialButton>
        </Grid>
        
      </Grid>
    </Box>
  );
};
