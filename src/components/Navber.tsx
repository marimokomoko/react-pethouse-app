import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navber.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRightToBracket,
  faDog,
  faCat,
} from "@fortawesome/free-solid-svg-icons";

const Navber = ({ isAuth }: any) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/recruitment">
        <FontAwesomeIcon icon={faDog} />
        里親募集
      </Link>
      <Link to="/recruitment">
        <FontAwesomeIcon icon={faCat} />
        ペットログ
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログアウト
        </Link>
      )}
    </nav>
  );
};

export default Navber;
