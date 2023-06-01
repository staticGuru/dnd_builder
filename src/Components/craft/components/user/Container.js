import { useNode } from "@craftjs/core";
import { Box, Slider } from "@material-ui/core";
import { Paper, FormControl, FormLabel } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import React, { useEffect } from "react";
import { DndState } from "../../../../context/DndProvider";

export const Container = ({
  background,
  padding,
  children,
  typeOfColumn = 1,
  height="10rem",
  ...props
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { themeArr, exportedQuestionaire } = DndState();
  useEffect(() => {
    console.log("ThemeArrrr", themeArr, exportedQuestionaire);
  }, [themeArr, exportedQuestionaire]);
  // return new Array(typeOfColumn).fill("E").map((e, index) => {
    return (
      <Paper
        {...props}
        ref={(ref) => connect(drag(ref))}
        style={{
          margin: "5px 0",
          background,
          padding: `${padding}px`,
          minHeight: "10rem",
          // display:"flex",
          // flex:1,
          height
        }}
      >
        {children}
      </Paper>
    );
  // });
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          name="background-color"
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color), 500);
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) =>
            setProp((props) => (props.padding = value), 500)
          }
        />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
  typeOfColumn: 1,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
