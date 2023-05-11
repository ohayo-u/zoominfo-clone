export function Calendar({ cliant, setSideAreaContent }) {
  return (
    <div className="side-area">
      <div className="calendar">
        <button onClick={() => setSideAreaContent(null)}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
        <p>calendar</p>
        <p>{cliant.name} - time block</p>
      </div>
    </div>
  );
}
