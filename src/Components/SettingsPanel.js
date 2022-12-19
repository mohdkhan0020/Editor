// // components/SettingsPanel.js
// import React from "react";
// import { useEditor } from "@craftjs/core";
// import {
//   Box,
//   Chip,
//   Grid,
//   Typography,
//   Button as MaterialButton,
//   FormControl,
//   FormLabel,
//   Slider,
// } from "@mui/material";

// export const SettingsPanel = () => {
//   const { selected } = useEditor((state) => {
//     const [currentNodeId] = state.events.selected;
//     let selected;

//     if (currentNodeId) {
//       selected = {
//         id: currentNodeId,
//         name: state.nodes[currentNodeId].data.name,
//         settings:
//           state.nodes[currentNodeId].related &&
//           state.nodes[currentNodeId].related.settings,
//       };
//     }
//   });

//   return (
//     <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
//       <Grid container direction="column" spacing={0}>
//         <Grid item>
//           <Box pb={2}>
//             <Grid container alignItems="center">
//               <Grid item xs>
//                 <Typography variant="subtitle1">Selected</Typography>
//               </Grid>
//               <Grid item>
//                 <Chip size="small" color="primary" label="Selected" />
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>
//         <FormControl size="small" component="fieldset">
//           <FormLabel component="legend">Prop</FormLabel>
//           <Slider
//             defaultValue={0}
//             step={1}
//             min={7}
//             max={50}
//             valueLabelDisplay="auto"
//           />
//         </FormControl>
//         <MaterialButton variant="contained">Delete</MaterialButton>
//       </Grid>
//     </Box>
//   );
// };

// components/SettingsPanel.js
import React from "react";

import {
  Box,
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
  FormControl,
  FormLabel,
  Slider,
} from "@mui/material";
import { useEditor } from "@craftjs/core";

// export const SettingsPanel = (query) => {
//   const { actions, selected } = useEditor((state) => {
//     const [currentNodeId] = state.events.selected;
//     let selected;

//     if (currentNodeId) {
//       selected = {
//         id: currentNodeId,
//         name: state.nodes[currentNodeId].data.name,
//         settings:
//           state.nodes[currentNodeId].related &&
//           state.nodes[currentNodeId].related.settings,
//         isDeletable: query.node(currentNodeId).isDeletable(),
//       };
//     }

//     return {
//       selected,
//     };
//   });

//   return selected ? (
//     <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
//       <Grid container direction="column" spacing={0}>
//         <Grid item>
//           <Box pb={2}>
//             <Grid container alignItems="center">
//               <Grid item xs>
//                 <Typography variant="subtitle1">Selected</Typography>
//               </Grid>
//               <Grid item>
//                 <Chip size="small" color="primary" label={selected.name} />
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>
//         {selected.settings && React.createElement(selected.settings)}
//         <MaterialButton variant="contained" color="default">
//           Delete
//         </MaterialButton>
//         {selected.isDeletable ? (
//           <MaterialButton
//             variant="contained"
//             color="default"
//             onClick={() => {
//               actions.delete(selected.id);
//             }}
//           >
//             Delete
//           </MaterialButton>
//         ) : null}
//       </Grid>
//     </Box>
//   ) : null;
// };

// components/SettingsPanel.js

export const SettingsPanel = () => {
  const { currentlySelectedId } = useEditor((state) => {
    const [currentlySelectedId] = state.events.selected;
    return {
      currentlySelectedId,
    };
  });
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });
  return selected ? (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="subtitle1">Selected</Typography>
              </Grid>
              <Grid item>
                <Chip size="small" color="primary" label="Selected" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {selected.settings && React.createElement(selected.settings)}
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Prop</FormLabel>
          <Slider
            defaultValue={0}
            step={1}
            min={7}
            max={50}
            valueLabelDisplay="auto"
          />
        </FormControl>
        {selected.isDeletable ? (
          <MaterialButton
            variant="contained"
            // color="default"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </MaterialButton>
        ) : null}
      </Grid>
    </Box>
  ) : null;
};
