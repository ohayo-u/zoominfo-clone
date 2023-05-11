import { Drawer } from "@mui/material";

export function Calendar({ isCalendarOpen, setIsCalendarOpen, cliant }) {
  return (
    <Drawer
      anchor="right"
      open={isCalendarOpen}
      onClose={() => setIsCalendarOpen(false)}
    >
      <>
        <button onClick={() => setIsCalendarOpen(false)}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
        <p>calendar</p>
        <p>{cliant.name} - time block</p>
      </>
    </Drawer>
  );
}
