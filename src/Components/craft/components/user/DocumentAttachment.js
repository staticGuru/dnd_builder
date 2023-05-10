import { useNode } from "@craftjs/core";
import { Paper, Typography } from "@material-ui/core";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
export const DocumentAttachment = ({
  width,
  height,
  src
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        cursor: "move",
        position: "relative",
      }}
    >
      <AttachFileOutlinedIcon style={{ fontSize: "30px",position:"absolute",top:"10px",left:"20px" }} />
      <Typography variant="h6" style={{ marginLeft: "16px" }}>
        {src ? (
          <iframe
            title="data"
            src={
              src != "" ? URL.createObjectURL(src) : "https://www.google.com/"
            }
            style={{ width, height}}
          />
        ) : (
          <span style={{alignSelf: "center"}}>Attach a file</span>
        )}
      </Typography>
    </Paper>
  );
};

export const DocumentAttachmentSettings = () => {
  const {
    actions: { setProp },
    props,
    isValid,
  } = useNode((node) => ({
    props: node.data.props,
    isValid: node.data.props.src != null,
  }));

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && isValid) {
      setProp((props) => (props.src = file));
    }
  };

  const handleWidthChange = (event) => {
    setProp((props) => (props.width = parseInt(event.target.value)));
  };

  const handleHeightChange = (event) => {
    setProp((props) => (props.height = parseInt(event.target.value)));
  };

  return (
    <div>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <div style={{ marginTop: "16px" }}>
        <Typography variant="subtitle1">Width</Typography>
        <input
          type="range"
          min={0}
          max={500}
          value={parseInt(props.width)}
          onChange={handleWidthChange}
        />
        <Typography variant="subtitle1">Height</Typography>
        <input
          type="range"
          min={100}
          max={500}
          value={parseInt(props.height)}
          onChange={handleHeightChange}
        />
      </div>
    </div>
  );
};
DocumentAttachment.craft = {
  props: {
    width: "500",
    height: "100px",
    src: "",
  },
  related: {
    settings: DocumentAttachmentSettings,
  },
};
