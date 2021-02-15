import React, { useEffect, useRef, useState } from "react";
import styles from "./experience.scss";
import {EXPERIENCE} from '../../data.json';

const List = ({ name, showDescription, index, isactive }) => {
  const changeIndex = () => {
    showDescription(index);
  };

  return (
    <div className={styles["list"]}>
      <div className={styles["border-vertical"]}></div>
      <div className={styles["border-horizontal"]}></div>
      <div className={styles["circle"]}></div>
      <div
        className={
          styles["list-value"] + " " + (isactive ? styles["active"] : "")
        }
        onClick={changeIndex}
      >
        {name}
      </div>
    </div>
  );
};

export default function Experience() {
  const contentRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    changeContent(selectedIndex);
  }, []);

  useEffect(() => {
    console.log("A UE: ", selectedIndex);
    changeContent(selectedIndex);
  }, [selectedIndex]);

  function changeContent(index) {
    contentRef.current.classList.remove(styles["animate-content-show"]);
    contentRef.current.classList.add(styles["animate-content-hide"]);
    setTimeout(() => {
      contentRef.current.classList.remove(styles["animate-content-hide"]);
      contentRef.current.innerHTML = ContentBuilder(EXPERIENCE[index]).content;
      contentRef.current.classList.add(styles["animate-content-show"]);
    }, 300);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Experience</div>
      <div className={styles["wrapper"]}>
        <div className={styles["box"]}>
          <div className={styles["lists"]}>
            {EXPERIENCE.map((val, index) => (
              <List
                key={index}
                name={val.title}
                index={index}
                showDescription={setSelectedIndex}
                isactive={index === selectedIndex}
              />
            ))}
          </div>
        </div>
        <div className={styles["box"]}>
          <div className={styles["content"]} ref={contentRef}></div>
        </div>
      </div>
    </div>
  );
}

function ContentBuilder(data) {
  return {
    title: data.title,
    content: `<div class=${styles["company-title"]}>
        ${data.desg} @ <a href="#" class=${styles["link"]}>${data.name}</a>
    </div>
    <p class=${styles["date"]}>${data.date}</p>
    <div class=${styles["description"]}><ul>
            ${data.description}</ul></div>`,
  };
}
