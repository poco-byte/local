import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import styles from "./messagebox.scss";

export default function Messagebox({closeHandler}) {

	const containerRef = useRef();
	const modalRef = useRef();

	useEffect(() => {
		fadeBackground();
	}, [])

	function fadeBackground() {
		containerRef.current.classList.add(styles['show-background']);
		// setTimeout(() => {
			modalRef.current.classList.add(styles['show-modal']);
		// }, 300)
	}

	function closeButtonHandler() {
		modalRef.current.classList.remove(styles['show-modal']);
		containerRef.current.classList.remove(styles['show-background']);
		setTimeout(() => {
			
			closeHandler();
		}, 200)
		
	}

  return (
    <div className={styles["container"]} ref={containerRef}>
      <div className={styles["wrapper"]}  ref={modalRef}>
        <div className={styles["header"]}>
          <div className={styles["title"]}>Message Me</div>
          <div className={styles["close"]} onClick={closeButtonHandler}>
            <FontAwesomeIcon icon={["fas", "times"]} className={styles["icon"]}/>
          </div>
        </div>
				<div className={styles['dash']}></div>
        <div className={styles["input"]}>
          <input type={"text"} className={styles["input-box"]} placeholder="Enter Name"/>
        </div>
        <div className={styles["input"]}>
          <textarea className={styles["textarea-box"]}placeholder="Enter Message..."></textarea>
        </div>
        <div className={styles["input"]}>
          <button className={styles["button"]}>Send</button>
        </div>
      </div>
    </div>
  );
}
