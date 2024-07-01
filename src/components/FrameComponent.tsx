import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contentImageAParent, className].join(" ")}>
      <div className={styles.contentImageA} />
      <header className={styles.contentImageB} />
      <div className={styles.contentImageC} />
      <div className={styles.image9Parent}>
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
        <img className={styles.frameChild} alt="" src="/ellipse-22@2x.png" />
        <h1 className={styles.theBest}>{`The Best `}</h1>
      </div>
      <img
        className={styles.logo421}
        loading="lazy"
        alt=""
        src="/logo4-2-1@2x.png"
      />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/ellipse-23@2x.png"
      />
      <img className={styles.divIcon} alt="" src="/div@2x.png" />
    </section>
  );
};

export default FrameComponent;
