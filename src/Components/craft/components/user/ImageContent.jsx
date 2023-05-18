import React from "react";
import { useNode } from "@craftjs/core";

export const ImageContent = ({ src, width, height }) => {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <img
      ref={connect}
      src={src}
      alt="sdf"
      style={{ width, height }}
      onClick={() => setProp((props) => (props.selected = true))}
    />
  );
};

export const ImageSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <label htmlFor="image-src">Source</label>
      <input
        type="text"
        value={props.src}
        onChange={(e) => setProp((props) => (props.src = e.target.value))}
        id="image-src"
      />

      <label htmlFor="image-width">Width</label>
      <input
        type="range"
        min={0}
        max={500}
        value={props.width}
        onChange={(e) => setProp((props) => (props.width = parseInt(e.target.value)))}
        id="image-width"
      />

      <label htmlFor="image-height">Height</label>
      <input
        type="range"
        min={0}
        max={500}
        value={props.height}
        onChange={(e) => setProp((props) => (props.height = parseInt(e.target.value)))}
        id="image-height"
      />
    </div>
  );
};

ImageContent.craft = {
  props: {
    width: "200px",
    height: "200px",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  related: {
    settings: ImageSettings,
  },
};
