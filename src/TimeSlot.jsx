import { Avatar, Divider, Grid, Stack, Typography } from "@mui/material";
export function TimeSlot({ task }) {
  return (
    <>
      {task && (
        <>
          <Grid item xs={2}>
            {task.time}
          </Grid>
          <Grid item xs={10}>
            <Divider />
            <Stack
              direction="raw"
              alignItems="center"
              bgcolor="#f5f6fb"
              sx={{ p: "10px", m: "10px" }}
            >
              <Avatar sx={{ m: "10px" }}></Avatar>
              <Typography variant="h6">{task.taskName} </Typography>
            </Stack>
          </Grid>
        </>
      )}
    </>
  );
}
