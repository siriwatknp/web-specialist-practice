import React from "react";
import cx from "clsx";
import styles from "./Input.module.scss";

const Input = ({ className, ...props }) => (
  <input className={cx(styles.root, className)} {...props} />
);

Input.propTypes = {};
Input.defaultProps = {};

export default Input;
