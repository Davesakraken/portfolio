import styles from "./boxes.module.css";

export default function Heading() {
  return (
    <>
      <div className={styles.BoxContainer}>
        <div className={styles.childOne}></div>
        <div className={styles.childTwo}></div>
        <div className={styles.childThree}></div>
      </div>
    </>
  );
}
