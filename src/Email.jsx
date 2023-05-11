import { Drawer, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppsIcon from "@mui/icons-material/Apps";
import MinimizeIcon from "@mui/icons-material/Minimize";

export function Email({ isEmailOpen, setIsEmailOpen, cliant }) {
  return (
    <Drawer
      anchor="right"
      open={isEmailOpen}
      onClose={() => setIsEmailOpen(false)}
    >
      <div className="email">
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
            <IconButton onClick={() => setIsEmailOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </Stack>
      </div>
    </Drawer>
  );
}
