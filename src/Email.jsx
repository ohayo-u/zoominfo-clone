import {
  Paper,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppsIcon from "@mui/icons-material/Apps";
import MinimizeIcon from "@mui/icons-material/Minimize";

export function Email({ cliant, setSideAreaContent }) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  const drawerWidth = "300px";
  return (
    <Paper elevation={3} sx={{ height: "700px", p: "10px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Email
        </Typography>
        <div>
          <IconButton>
            <MinimizeIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={() => setSideAreaContent(null)}>
            <CloseIcon />
          </IconButton>
        </div>
      </Stack>
      <Stack direction="row" alignItems="center">
        <h4 style={{ marginRight: "10px" }}>Template</h4>
        <p>Select new or save</p>
      </Stack>
      <Divider />
      <Stack direction="row" alignItems="center">
        <h4 style={{ marginRight: "10px" }}>From</h4>
        <p>Daniel Menashe</p>
      </Stack>
      <Divider />
      <Stack direction="row" alignItems="center">
        <h4 style={{ marginRight: "10px" }}>To</h4>
        <Chip
          onDelete={handleDelete}
          label={cliant.name}
          variant="outlined"
        ></Chip>
      </Stack>
      <Divider />
      <Stack direction="row" alignItems="center">
        <h4 style={{ marginRight: "10px" }}>Subject</h4>
        <p>Congratulations on your new role</p>
      </Stack>
      <Divider />
    </Paper>
  );
}
