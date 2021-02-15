import React, { useEffect, useRef } from "react";
import styles from "./home.scss";
import {HOME} from '../../data.json';

const text = HOME.title;

export default function Home({setIsLoaded}) {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const backgroundRef = useRef();
  console.log("Home", HOME);

  useEffect(() => {
    const img = document.createElement('img');
    img.classList.add(styles["image"]);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    img.onload = doAnimation
    img.src = "/img/atanas-teodosiev-EzoGykQmUYI-unsplash.jpg"
    backgroundRef.current.appendChild(img);
  }, []);

  function doAnimation() {
    setIsLoaded(true);
    const titleContainer = titleRef.current;
    titleRef.current.innerHTML = text;
    const box = titleRef.current.getBoundingClientRect();
    titleRef.current.style.width = box.width + "px";
    titleRef.current.innerHTML = "";

    let iniPos = 0;

    function animate() {
      if (iniPos < text.length) {
        const a = document.createElement("span");
        a.innerHTML = text[iniPos];
        a.classList.add(styles["animate"]);
        titleContainer.appendChild(a);
        setTimeout(() => {
          iniPos++;
          animate();
        }, 70);
      } else {
        slideSubtitle();
      }
    }

    animate();
  }

  function slideSubtitle() {
    const subtitleContainer = subtitleRef.current;
    subtitleContainer.classList.add(styles["slide"]);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["background"]} ref={backgroundRef}>
      </div>
      <div className={styles["box"]}>
        <div className={styles["title"]} ref={titleRef}></div>
        <div className={styles["dash"]}></div>
        <div className={styles["subtitle"]} ref={subtitleRef}>
          {HOME.subtitle}
        </div>
      </div>
    </div>
  );
}
