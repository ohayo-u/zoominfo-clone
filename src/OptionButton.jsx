import { Button } from "@mui/material";

export function OptionButton(props) {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{ mr: 2, borderRadius: 4 }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
