import { Paper } from "@mui/material";

export function Paragraph(props) {
  return (
    <Paper elevation={0} sx={{ padding: "15px", margin: "10px", ...props.sx }}>
      {props.children}
    </Paper>
  );
}
