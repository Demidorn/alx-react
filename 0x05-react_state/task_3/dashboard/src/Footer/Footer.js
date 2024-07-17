import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";

function Footer() {
  const { user } = React.useContext(AppContext);
  return (
    <>
      <div className="App-footer">
        {user.isLoggedIn && (
          <p>
            <a href="#">Contact Us</a>
          </p>

        )}
        <p>
        Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default Footer;
