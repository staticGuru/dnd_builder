import React, { useEffect, useRef } from "react";
import { useNode } from "@craftjs/core";
import { Box } from "@material-ui/core";

export const Audio = ({ src, volume, ...props }) => {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.volume = parseFloat(volume);
    }
  }, [src, volume]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const setVolume = (newVolume) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(newVolume);
    }
  };
  return (
    <div ref={connect} className="flex flex-col items-center space-y-4 bg-gray-300 cursor-pointer rounded-sm z-50" onClick={(e)=>e.stopPropagation()}>
      <audio ref={audioRef} controls />
      {/* <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
  />*/}
    </div>
  );
};

export const AudioSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Box className="pb-3">
      <label htmlFor="image-src">Source</label>
      <input
        type="text"
        value={props.src}
        onChange={(e) => setProp((props) => (props.src = e.target.value))}
        id="image-src"
      />

    {/*  <label htmlFor="image-width">Width</label>
      <input
        type="range"
        min={0}
        max={500}
        value={props.width}
        onChange={(e) =>
          setProp((props) => (props.width = parseInt(e.target.value)))
        }
        id="image-width"
      />

      <label htmlFor="image-height">Height</label>
      <input
        type="range"
        min={0}
        max={500}
        value={props.height}
        onChange={(e) =>
          setProp((props) => (props.height = parseInt(e.target.value)))
        }
        id="image-height"
     />*/}
    </Box>
  );
};

Audio.craft = {
  props: {
    src: "http://stream.radio.co/sedf8bacc9/listen",
    volume: 0.5,
  },
  related: {
    settings: AudioSettings,
  },
};
