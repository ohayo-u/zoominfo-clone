import {
  Button,
  Stack,
  IconButton,
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";

export function OverView({ setSideAreaContent, cliant }) {
  return (
    <Paper elevation={3} sx={{ height: "700px", p: "10px" }}>
      <>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Overview
          </Typography>
          <Box>
            <IconButton>
              <LaunchIcon />
            </IconButton>
            <IconButton onClick={() => setSideAreaContent(null)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Stack>
        <Stack sx={{ m: "20px" }}>
          <Typography variant="h6" color="primary">
            {cliant.name}
          </Typography>
          <Typography variant="p">{cliant.position}</Typography>
        </Stack>
        <Box>
          <Button variant="contained" sx={{ borderRadius: "20px" }}>
            Add to Salesflow
          </Button>
          <Button variant="outlined" sx={{ borderRadius: "20px", m: "10px" }}>
            Export
          </Button>
        </Box>
        <Divider />
        <Stack sx={{ m: "10px" }}>
          <Typography variant="p">Email addresses</Typography>
          <Typography variant="p">
            Business
            <Typography variant="span" color="primary" sx={{ ml: "8px" }}>
              {cliant.email}
            </Typography>
          </Typography>
          <Typography variant="p">Phone numbers</Typography>
          <Typography variant="p">
            Direct
            <Typography variant="span" color="primary" sx={{ ml: "8px" }}>
              {cliant.phoneNumber}
            </Typography>
          </Typography>
        </Stack>
      </>
    </Paper>
  );
}
