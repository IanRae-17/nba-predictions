import { useAuth0 } from "@auth0/auth0-react";
import "../css/nav.css";

function Nav() {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div className="nav-container">
      <ul>
        <div>
          <li>
            <a>Standings Predictions</a>
          </li>
          <li>
            <a>Awards</a>
          </li>
          <li>
            <a>All-NBA Teams</a>
          </li>
        </div>
        <div>
          {!isLoading && !user && (
            <li>
              <button
                className="session-button"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </li>
          )}
          {!isLoading && user && (
            <li>
              <button className="session-button" onClick={() => logout()}>
                Log Out
              </button>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Nav;
