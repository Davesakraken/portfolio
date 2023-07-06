import styles from "./about.module.css";

export default function MyTechnologies() {
  return (
    <section id="about">
      <div className="flex justify-center gap-8 flex-wrap header-gradient">
        <div className={styles.aboutBox}>
          <p className="absolute top-10 p-8 align-middle text-center text-2xl ">
            A passionate developer specializing in frontend web development. I bring designs to life with precision and creativity to
            deliver seamless user experiences.
          </p>
        </div>
        <div className={styles.pictureBox}></div>
      </div>
    </section>
  );
}
