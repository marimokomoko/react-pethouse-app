import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navber.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navber = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        里親募集
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        ペットたち
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        login
      </Link>
    </nav>
  );
};

export default Navber;
