import { Paper } from "@mui/material";

export function Calendar({ setSideAreaContent, cliant }) {
  return (
    <Paper elevation={3} sx={{ height: "700px", p: "10px" }}>
      <button onClick={() => setSideAreaContent(null)}>
        <i className="fa-solid fa-xmark fa-lg"></i>
      </button>
      <p>calendar</p>
      <p>{cliant.name} - time block</p>
    </Paper>
  );
}
