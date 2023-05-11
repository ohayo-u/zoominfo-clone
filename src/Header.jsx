import { AppBar, Toolbar, Typography } from "@mui/material";
export function Header() {
  const links = ["Lists", "Intent", "Tracker", "Websights"];

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <nav>
          {links.map((link) => {
            return (
              <Typography key={link} sx={{ mr: "15px" }} variant="6">
                {link}
              </Typography>
            );
          })}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
