import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./footer.scss";
import Messagebox from "./messagebox/messagebox";
import {HOME} from '../../../data.json';

export default function Footer() {
  const [messageboxShow, setMessageboxShow] = useState(false);

  function showMessageBox() {
    setMessageboxShow(true);
  }

  function hideMessageBox() {
    setMessageboxShow(false);
  }

  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["content"]}>
          <div className={styles["box"]}>
            <div className={styles["button"]} onClick={showMessageBox}>
              Message Me!
            </div>
          </div>
          <div className={styles["box"]}>
            <div className={styles["social-media"]}>
              <a className={styles["text"]} href="#">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  className={styles["icon"]}
                />
                Facebook
              </a>
              <a className={styles["text"]} href="#">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className={styles["icon"]}
                />
                Twitter
              </a>
              <a className={styles["text"]} href="#">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className={styles["icon"]}
                />
                Github
              </a>
            </div>
          </div>
          <div className={styles["box"]}>
            <div className={styles["details"]}>
              <span>{HOME.title}</span>
              <span>{HOME.subtitle}</span>
              <span>{HOME.email}</span>
              <span>{HOME.contact}</span>
            </div>
          </div>
        </div>
      </div>
      {messageboxShow && <Messagebox closeHandler={hideMessageBox} />}
    </>
  );
}
