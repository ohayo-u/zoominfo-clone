export function Email({ cliant, setSideAreaContent }) {
  return (
    <div className="side-area">
      <div className="email">
        <div className="side-area-header">
          <h2>Email</h2>
          <button onClick={() => setSideAreaContent(null)}>
            <i class="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>
        <h3>Template</h3>
        <h3>From</h3>
        <h3>
          To <span className="addressee">{cliant.name}</span>
        </h3>
        <h3>Subject</h3>
      </div>
    </div>
  );
}
