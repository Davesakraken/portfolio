import styles from "@/components/FloatingBoxes/boxes.module.css";

export default function Boxes() {
  return (
    <>
      <div className={styles.boxContainer}>
        <div className={styles.childOne}></div>
        <div className={styles.childTwo}></div>
        <div className={styles.childThree}></div>
      </div>
    </>
  );
}
