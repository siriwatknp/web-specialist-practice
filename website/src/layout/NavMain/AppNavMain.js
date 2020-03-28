import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./AppNavMain.module.scss";

const AppNavMain = () => (
  <nav className={styles.root}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.link} to={"/categories/essential"}>
          Essential
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to={"/categories/baking"}>
          Baking
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to={"/categories/chiles"}>
          Chiles
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to={"/categories/extract"}>
          Extract
        </Link>
      </li>
    </ul>
  </nav>
);

AppNavMain.propTypes = {};
AppNavMain.defaultProps = {};

export default AppNavMain;
