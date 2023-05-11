import { IconButton, Paper, Stack } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export function Paragraph(props) {
  return (
    <Stack direction="row">
      <Paper
        elevation={0}
        sx={{ p: "15px", m: "10px", width: "600px", ...props.sx }}
      >
        {props.children}
      </Paper>
      {props.sender === "zoominfo" ? (
        <div style={{ marginTop: "10px" }}>
          <IconButton>
            <ThumbUpOffAltIcon />
          </IconButton>
          <IconButton>
            <ThumbDownOffAltIcon />
          </IconButton>
        </div>
      ) : null}
    </Stack>
  );
}
