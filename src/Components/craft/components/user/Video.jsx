// import { useNode, Element } from '@craftjs/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Slider from '@material-ui/core/Slider';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//     boxSizing: 'border-box',
//     position: 'relative',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'contain',
//   },
//   controls: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     padding: theme.spacing(1),
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     boxSizing: 'border-box',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   input: {
//     width: 60,
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
// }));

// const Video = ({ src = '', width = 500, height = 300 }) => {
//   const classes = useStyles();
//   const { connectors: { connect, drag } } = useNode();

//   const handleChange = (prop) => (event, newValue) => {
//     actions.setProp((props) => {
//       props[prop] = newValue;
//     });
//   };

//   return (
//     <Paper
//       className={classes.paper}
//       ref={(ref) => connect(drag(ref))}
//       elevation={3}
//     >
//       <Element is={TextField} label="Video URL" value={src} onChange={handleChange('src')} />
//       <video
//         src={src}
//         className={classes.video}
//         style={{ width, height }}
//       />
//       <div className={classes.controls}>
//         <Slider
//           value={width}
//           onChange={handleChange('width')}
//           min={100}
//           max={800}
//           step={10}
//         />
//         <span>Width:</span>
//         <TextField
//           className={classes.input}
//           value={width}
//           onChange={handleChange('width')}
//         />
//         <Slider
//           value={height}
//           onChange={handleChange('height')}
//           min={100}
//           max={600}
//           step={10}
//         />
//         <span>Height:</span>
//         <TextField
//           className={classes.input}
//           value={height}
//           onChange={handleChange('height')}
//         />
//       </div>
//     </Paper>
//   );
// };

// Video.craft = {
//   props: {
//     src: 'https://www.w3schools.com/html/mov_bbb.mp4',
//     width: 500,
//     height: 300,
//   },
//   related: {
//     settings: VideoSettings,
//   },
// };


import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { Box, FormControl, FormLabel, Input, Slider } from '@material-ui/core';

export const Video = ({ src, width, height }) => {
  const { connectors: { connect, drag }, selected } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <Box
      ref={connect}
      width={width}
      height={height}
      boxShadow={selected ? 'md' : 'sm'}
      p={2}
      borderRadius={2}
      border="1px solid rgba(0,0,0,0.2)"
      style={{ cursor: 'move' }}
    >
      <video src={src} width="100%" height="100%" controls />
    </Box>
  );
};

export const VideoSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

 

  const handleSrcChange = (e) => {
    setProp((props) => (props.src = e.target.value));
  };

  return (
    <FormControl>
      <FormLabel>Source URL</FormLabel>
      <Input value={props.src} onChange={handleSrcChange} />
      <label htmlFor="video-width">Width</label>
      <input
      type="range"
      min={0}
      max={500}
      value={props.width}
      onChange={(e) => setProp((props) => (props.width = parseInt(e.target.value)))}
      id="video-width"
    />
    <label htmlFor="video-height">Height</label>
    <input
      type="range"
      min={0}
      max={500}
      value={props.height}
      onChange={(e) => setProp((props) => (props.height = parseInt(e.target.value)))}
      id="video-height"
    />
   
    </FormControl>
  );
};
Video.craft = {
     props: {
       width: "200px",
       height: "200px",
       src: "https://www.w3schools.com/html/mov_bbb.mp4",
     },
     related: {
       settings: VideoSettings,
     },
   };
