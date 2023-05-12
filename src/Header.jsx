import {
  Accordion,
  AccordionSummary,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <nav>
          {["Lists", "Intent", "Tracker", "Websights"].map((link) => {
            return (
              <Typography key={link} sx={{ mr: "15px" }} variant="6">
                {link}
              </Typography>
            );
          })}
        </nav>
        <Accordion elevation={0} bgcolor="inherit">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>More</Typography>
          </AccordionSummary>
        </Accordion>
        <Stack direction="row" spacing={2} alignItems="center">
          <NotificationsNoneIcon />
          <AppsIcon />
          <Avatar>DM</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
