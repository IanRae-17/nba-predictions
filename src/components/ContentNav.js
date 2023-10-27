import "../css/content_nav.css";

function ContentNav({ headers, activePage, setActivePage }) {
  function renderHeader(header, index) {
    if (activePage === header) {
      return (
        <li className="active" key={index}>
          <a onClick={() => setActivePage(header)}>{header}</a>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <a onClick={() => setActivePage(header)}>{header}</a>
        </li>
      );
    }
  }
  return (
    <div className="content-nav-container">
      <ul>
        {headers && headers.map((header, index) => renderHeader(header, index))}
      </ul>
    </div>
  );
}

export default ContentNav;
