import React from "react";
import { Link } from "react-router-dom";
import logo from "logo.svg";
import AppNavMain from "layout/NavMain";
import Container from "components/Container";
import Input from "components/Input";
import styles from "./AppHeader.module.scss";

const AppHeader = () => (
  <header className={styles.root}>
    <Container>
      <div className={styles.toolbar}>
        <Link
          className={styles.logoLink}
          to={"/"}
          aria-label={"Go to home page"}
        >
          <img className={styles.logo} alt={""} src={logo} />
        </Link>
        <AppNavMain />
        <Input
          aria-label={"Search product"}
          placeholder={"type product name"}
        />
      </div>
    </Container>
  </header>
);

AppHeader.propTypes = {};
AppHeader.defaultProps = {};

export default AppHeader;
