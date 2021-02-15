import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styles from "./peers.scss";
import { FEEDBACK } from "../../../data.json";

function PeerView({ feedback, id }) {
  return (
    <div className={styles["peer"]} id={id}>
      <div className={styles["box"]}>
        <div className={styles["placeholder"]}></div>
        <div className={styles["image"]}>
          <img
            src={feedback.image}
            height="150px"
            width="150px"
            className={styles["img"]}
          />
        </div>
      </div>
      <div className={styles["box"]}>
        <div className={styles["title"]}>{feedback.name}</div>
        <div className={styles["subtitle"]}>{feedback.desg}</div>
        <div className={styles["description"]}>{feedback.feedback}</div>
      </div>
    </div>
  );
}

let itemClassName;
let items = null;
let totalItems = 0;
let slide = 0;
let moving = true;

export default function Peers() {
  const carousalRef = useRef();

  useEffect(() => {
    itemClassName = styles["peer"];
    items = document.getElementsByClassName(itemClassName);
    totalItems = items.length;
    setInitialClasses();
    moving = false;
  }, []);

  function setInitialClasses() {
    items[totalItems - 1].classList.add(styles["prev"]);
    items[0].classList.add(styles["active"]);
    items[1].classList.add(styles["next"]);
  }

  function moveNext() {
    moveCarousal("N");
  }
  function movePrev() {
    moveCarousal("P");
  }
  function disableInteraction() {
    moving = true;
    setTimeout(function () {
      moving = false;
    }, 600);
  }

  function moveCarousal(direction) {
    if (moving) {
      return;
    }
    if (!moving) {
      disableInteraction();

      let current = slide;
      let previous;
      let next;
      let newCurrent;
      let newPrevious;
      let newNext;

      if (direction === "N") {
        previous = current - 1 < 0 ? totalItems - 1 : current - 1;
        next = current + 1 >= totalItems ? 0 : current + 1;
        newCurrent = next;
        newPrevious = current;
        newNext = next + 1 >= totalItems ? 0 : next + 1;
      } else {
        previous = current - 1 < 0 ? totalItems - 1 : current - 1;
        next = current + 1 >= totalItems ? 0 : current + 1;
        newCurrent = previous;
        newPrevious = previous - 1 < 0 ? totalItems - 1 : previous - 1;
        newNext = current;
      }
      items[previous].className = itemClassName;
      items[next].className = itemClassName;
      items[newPrevious].className = itemClassName + " " + styles["prev"];
      items[newCurrent].className = itemClassName + " " + styles["active"];
      items[newNext].className = itemClassName + " " + styles["next"];
      slide = newCurrent;
    }
  }

  const carousalView = FEEDBACK.map((val, index) => (
    <PeerView feedback={val} id={`carousel-item`} />
  ));

  return (
    <div className={styles["container"]}>
      <div className={styles["carousal-content"]}>
        <div className={styles["carousal"]} ref={carousalRef}>
          {carousalView}
        </div>
      </div>
      <div className={styles["prev"]} onClick={movePrev}>
        <FontAwesomeIcon icon={["fas", "chevron-left"]} />
      </div>
      <div className={styles["next"]} onClick={moveNext}>
        <FontAwesomeIcon icon={["fas", "chevron-right"]} />
      </div>
    </div>
  );
}
