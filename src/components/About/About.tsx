import styles from "./about.module.css";
import Boxes from "../FloatingBoxes/Boxes";

export default function MyTechnologies() {
  return (
    <section id="about">
      <div className="flex justify-center gap-4 flex-wrap header-gradient">
        <div className={styles.aboutBox}>
          <p className="mt-16 m-5 text-center text-2xl">
            A passionate developer specializing in frontend web development. I bring designs to life with precision and creativity to
            deliver seamless user experiences.
          </p>
        </div>
        <div className={styles.pictureBox}></div>
      </div>
    </section>
  );
}
