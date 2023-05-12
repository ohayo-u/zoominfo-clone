import { Grid, Paper, Typography } from "@mui/material";
import { TimeSlot } from "./TimeSlot";

export function Calendar({ cliant }) {
  const tasks = [
    { time: "8am", taskName: "Quest Demo Call" },
    { time: "9am", taskName: "DQS to Tesla" },
    { time: "10am", taskName: "Sysco Demo Call" },
    { time: "11am", taskName: cliant.name + "-timeblock" },
    { time: "12am", taskName: "Quest Demo Call" },
  ];
  return (
    <Paper elevation={3} sx={{ height: "700px", p: "10px" }}>
      <Typography variant="h6">CARENDAR</Typography>
      <Typography variant="h5">Mon, Feb 13</Typography>
      <Grid container>
        {tasks.map((task) => {
          return <TimeSlot task={task} />;
        })}
        <TimeSlot />
      </Grid>
    </Paper>
  );
}
