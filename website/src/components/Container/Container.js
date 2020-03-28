import React from "react";
import cx from "clsx";
import styles from "./Container.module.scss";

const Container = ({ className, ...props }) => (
  <div className={cx(styles.root, className)} {...props} />
);

Container.propTypes = {};
Container.defaultProps = {};

export default Container;
