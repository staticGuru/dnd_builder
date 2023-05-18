import { useEditor, useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel, Box, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { DndState } from "../../../../context/DndProvider";

export const Option = ({ text, fontSize, textAlign, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    isClicked,
    actions: { setProp },
    id
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
    isClicked: state.data.props.isClicked,
    state
  }));
  const {enabled,actions,query}=useEditor((state) => ({
     enabled: state.options.enabled,
  }))
  const {currentQuestion}=DndState();
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);
  function updateQuestionData(){
    let data=JSON.parse(localStorage.getItem("publishList"));
    let curData=query.serialize()
  
    data[currentQuestion].json=curData;
console.log("datatata",data[currentQuestion],curData);
    localStorage.setItem("publishList",JSON.stringify(data));
  }
function handleClickAction(){
  console.log("iddddewd",id,enabled)
     if(enabled){
          selected && setEditable(true);
     }else{
          // setProp((props) => (props.isClicked = !isClicked))
          actions.setOptions((options) => (options.enabled = true))
          console.log("iddddd",id);
          setProp((props) => (props.isClicked = !isClicked));
          actions.setOptions((options) => (options.enabled = false))
          updateQuestionData();
     }
}
  return (
    <Button
      // {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => handleClickAction()}
      className="w-fit bg-red-500 cursor-text"
      style={{textTransform: 'none'}}
      sx={{"&:hover": {backgroundColor: "#1976d2" }}}
      variant="text"
      disableRipple
      disableFocusRipple
      disableElevation
    >
  {/* bg-white/5*/}
      <div className={`py-1 pl-2 pr-2 m-2 border-2 cursor-pointer  ${isClicked?"border-green-800 bg-green-300":"border-gray-400 bg-white/5"} rounded-xl w-fit justify-center`}>
        <ContentEditable
          html={text}
          disabled={!editable}
          onChange={(e) =>
            setProp(
              (props) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
              500
            )
          }
          tagName="p"
          style={{ fontSize: `${fontSize}px`, textAlign, outline: "none",justifyContent: "center"}}
        />
      </div>
    </Button>
  );
};

const OptionSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    checked
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    checked: node.data.props.checked,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value), 1000);
          }}
        />
        <Box className="flex flex-row" py={2}>
          <FormLabel component="legend" for="flexSwitchCheckDefault">
            Is correct answer?
          </FormLabel>
          <input
            class="mr-5 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            value={checked}
            onChange={() =>
              setProp((props) => (props.checked = !checked),500)
            }
          />
        </Box>
      </FormControl>
    </>
  );
};

export const OptionDefaultProps = {
  text: "Hi",
  fontSize: 20,
  checked:false,
  isClicked:false
};

Option.craft = {
  props: OptionDefaultProps,
  related: {
    settings: OptionSettings,
  },
};
