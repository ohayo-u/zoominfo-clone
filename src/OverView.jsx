import { Paper } from "@mui/material";

export function OverView({ setSideAreaContent, cliant }) {
  return (
    <Paper elevation={3} sx={{ height: "700px", p: "10px" }}>
      <>
        <div className="side-area-header">
          <h2>Overview</h2>
          <button onClick={() => setSideAreaContent(null)}>
            <i className="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>

        <h3>{cliant.name}</h3>
        <p>{cliant.position}</p>
        <p>Email addresses: {cliant.email}</p>
        <p>Phone numbers: {cliant.phoneNumber}</p>
      </>
    </Paper>
  );
}
