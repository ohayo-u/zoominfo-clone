import { Drawer } from "@mui/material";

export function OverView({ isOverviewOpen, setIsOverviewOpen, cliant }) {
  return (
    <Drawer
      anchor="right"
      open={isOverviewOpen}
      onClose={() => setIsOverviewOpen(false)}
    >
      <div className="overView">
        <div className="side-area-header">
          <h2>Overview</h2>
          <button onClick={() => setIsOverviewOpen(false)}>
            <i className="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>

        <h3>{cliant.name}</h3>
        <p>{cliant.position}</p>
        <p>Email addresses: {cliant.email}</p>
        <p>Phone numbers: {cliant.phoneNumber}</p>
      </div>
    </Drawer>
  );
}
