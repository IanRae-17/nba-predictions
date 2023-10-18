import "../css/content_nav.css";

function ContentNav({ headers, activePage }) {
  function renderHeader(header) {
    if (activePage === header) {
      return (
        <li className="active">
          <a>{header}</a>
        </li>
      );
    } else {
      return (
        <li>
          <a>{header}</a>
        </li>
      );
    }
  }
  return (
    <div className="content-nav-container">
      <ul>{headers && headers.map((header) => renderHeader(header))}</ul>
    </div>
  );
}

export default ContentNav;
