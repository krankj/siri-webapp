import React from "react";
import styles from "./Social.module.css";
import { ReactComponent as FacebookIcon } from "assets/icons/social/fb.svg";

const Social = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/siri.gramodyoga.7" target="blank">
        <FacebookIcon className={styles.fbIcon} />
      </a>
    </div>
  );
};

export default Social;
