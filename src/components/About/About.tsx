import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about">
      <div className="flex justify-center gap-12 flex-wrap header-gradient">
        <div className={styles.aboutBox}>
          <p className="m-5 mt-10 text-end text-2xl">
            A passionate developer specializing in frontend web development. I bring designs to life with precision and creativity to
            deliver seamless user experiences.
          </p>
          <div className={styles.boxes}>
            <div className="bg-violet-500 w-12 h-12 rounded-xl"></div>
            <div className="bg-violet-500 w-12 h-12 rounded-xl"></div>
            <div className="bg-violet-500 w-12 h-12 rounded-xl"></div>
          </div>
        </div>
        <div className={styles.pictureBox}></div>
      </div>
    </section>
  );
}
