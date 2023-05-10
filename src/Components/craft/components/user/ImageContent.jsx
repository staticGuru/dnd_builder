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


// import { useNode } from "@craftjs/core";
// // import { Slider, FormControl, FormLabel } from "@material-ui/core";
// import React, { useState, useEffect } from "react";
// import ContentEditable from "react-contenteditable";

// export default function ImageContent({ width, height, src, ...props }){
//   const {
//     connectors: { connect, drag },
//     selected,
//     actions: { setProp },
//   } = useNode((node) => ({
//     width: node.data.props.width,
//     selected: node.events.selected,
//     height: node.data.props.height,
//     src: node.data.props.src,
//     dragged: node.events.dragged,
//   }));

//   const [editable, setEditable] = useState(false);

//   useEffect(() => {
//     if (selected) {
//       return;
//     }

//     setEditable(false);
//   }, [selected]);

//   return (
//     <div
//       {...props}
//       ref={(ref) => connect(drag(ref))}
//       onClick={() => selected && setEditable(true)}
//       style={{ width: "fit-content" }}
//     >
//       <img
//         //     ref={connect}
//         //     {...drag()}
//         src={src}
//         //     disabled={!editable}
//         width={width}
//         height={height}
//         alt="dummyImage"
//         onClick={() => {
//           // const newWidth = prompt("Enter new width:", width);
//           // if (newWidth) {
//           //   setProp((props) => (props.width = newWidth));
//           // }

//           // const newHeight = prompt("Enter new height:", height);
//           // if (newHeight) {
//           //   setProp((props) => (props.height = newHeight));
//           // }

//           // const newSrc = prompt("Enter new image URL:", src);
//           // if (newSrc) {
//           //   setProp((props) => (props.src = newSrc));
//           // }
//         }}
//       />
//     </div>
//   );
// };

// export const ImageSettings = () => {
//   const { actions: { setProp }, node } = useNode((node) => ({
//     url: node.data.url,
//     width: node.data.width,
//     height: node.data.height,
//   }));

//   const [url, setUrl] = useState(node.data.url);
//   const [width, setWidth] = useState(node.data.width);
//   const [height, setHeight] = useState(node.data.height);
//   const handleWidthChange = (event, newValue) => {
//     setProp(props => (props.width = newValue));
//   };

//   const handleHeightChange = (event, newValue) => {
//     setProp(props => (props.height = newValue));
//   };
//   return (
//     <div>
//       <h3>Image Settings</h3>
//       <label htmlFor="url">URL:</label>
//       <input
//         type="text"
//         id="url"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         onBlur={() => actions.setNodeData((data) => (data.url = url))}
//       />
//       <br />
//       <label htmlFor="width">Width:</label>
//       <input
//         type="number"
//         id="width"
//         value={width}
//         onChange={(e) => setWidth(e.target.value)}
//         onBlur={() => actions.setNodeData((data) => (data.width = width))}
//       />
//       <br />
//       <label htmlFor="height">Height:</label>
//       <input
//         type="number"
//         id="height"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//         onBlur={() => actions.setNodeData((data) => (data.height = height))}
//       />
//     </div>
//   );
// };
// Image.craft = {
//   props: {
//     width: "200px",
//     height: "200px",
//     src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
//   },
//   related: {
//     settings: ImageSettings,
//   },
// };
// // const TextSettings = () => {
// //   const {
// //     actions: { setProp },
// //     fontSize,
// //   } = useNode((node) => ({
// //     text: node.data.props.text,
// //     fontSize: node.data.props.fontSize,
// //   }));

// //   return (
// //     <>
// //       <FormControl size="small" component="fieldset">
// //         <FormLabel component="legend">Font size</FormLabel>
// //         <Slider
// //           value={fontSize || 7}
// //           step={7}
// //           min={1}
// //           max={50}
// //           onChange={(_, value) => {
// //             setProp((props) => (props.fontSize = value), 1000);
// //           }}
// //         />
// //       </FormControl>
// //     </>
// //   );
// // };

// // export const TextDefaultProps = {
// //   text: 'Hi',
// //   fontSize: 20,
// // };

// // Text.craft = {
// //   props: TextDefaultProps,
// //   related: {
// //     settings: TextSettings,
// //   },
// // };
