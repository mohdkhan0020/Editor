// components/Toolbox.js
import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./User/Container";
import { Card } from "./User/Card";
import { Button } from "./User/Button";
import { Text } from "./User/Text";
import { Column } from "./User/Column";
import { DoubleColumn, DoubleColumnChild } from "./User/DoubleColumn";
import { ThreeColumn } from "./User/ThreeColumn";
import { FourColumn } from "./User/FourColumn";
import { Image } from "./User/Image";
import { Table } from "./User/Table";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={8} py={2}>
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
                // <Container text="this is containersss" />
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
            ref={(ref) =>
              connectors.create(
                ref,
                // <Element is={Column} padding={20} canvas />
                <Column text="Column Text" />
              )
            }
            variant="contained"
          >
            Column
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <DoubleColumn />)}
            variant="contained"
          >
            2Column
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <ThreeColumn />)}
            variant="contained"
          >
            3Column
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,

                <FourColumn />
              )
            }
            variant="contained"
          >
            4Column
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Image />)}
            variant="contained"
          >
            Image
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Table />)}
            variant="contained"
          >
            Table
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
