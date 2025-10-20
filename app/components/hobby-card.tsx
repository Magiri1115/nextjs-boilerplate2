import React from "react";
import styles from "./hobby-card.module.css";

type Hobby = {
  image: string;
  title: string;
  text: string;
};

export default function HobbyCard({ hobby }: { hobby: Hobby }) {
  return (
    <div className={styles["hobby-border"]}>
      {/* 📸 固定枠に画像を収める */}
      <div className={styles["hobby-image-wrapper"]}>
        <img
          src={hobby.image}
          alt={hobby.title}
          className={styles["hobby-image"]}
        />
      </div>

      {/* 📝 タイトルと実績 */}
      <div className={styles["hobby-sentence"]}>
        <h2 className={styles["hobby-title"]}>{hobby.title}</h2>
        <p className={styles["hobby-text"]}>{hobby.text}</p>
      </div>
    </div>
  );
}
