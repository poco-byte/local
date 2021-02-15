import React from "react";
import styles from "./about.scss";
import { ABOUT } from "../../data.json";

export default function About() {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>About Me</div>
      <div className={styles["dash"]}></div>
      <div className={styles["wrapper"]}>
        <div className={styles["box"]}>
          <div className={styles["subtitle"]}>
            {ABOUT.description.split("\n").map((v) => (
              <p>{v}</p>
            ))}
          </div>
        </div>
        <div className={styles["box"]}>
          <div className={styles["image-container"]}>
            <div className={styles["placeholder"]}></div>
            <div className={styles["image"]}>
              <img
                src={ABOUT.image}
                height="300px"
                width="300px"
                className={styles["img"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
