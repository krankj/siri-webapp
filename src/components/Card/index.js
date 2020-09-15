import React from "react";
import styles from "./index.module.css";
import SlideShow from "components/SlideShow";

const Card = ({ size }) => {
  return (
    <div className={`${styles.cardContainer} ${styles[size]}`}>
      <h2>Heading</h2>
      <SlideShow />
      <p>This image was captured in the ...</p>
    </div>
  );
};

export default Card;
