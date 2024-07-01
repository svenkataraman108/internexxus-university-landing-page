import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headingElementsParent, className].join(" ")}>
      <img className={styles.headingElementsIcon} alt="" src="/vector-1.svg" />
      <div className={styles.headingElements}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
        <div className={styles.headingShapes}>
          <img
            className={styles.headingShapeIcons}
            alt=""
            src="/vector-2.svg"
          />
          <div className={styles.titleGoesHere}>TITLE GOES HERE</div>
          <img
            className={styles.headingDecorationsIcon}
            alt=""
            src="/vector-3.svg"
          />
        </div>
      </div>
      <img className={styles.headingElementsIcon1} alt="" src="/vector-4.svg" />
      <div className={styles.headingElements1}>
        <img className={styles.rectangleIcon1} alt="" src="/rectangle@2x.png" />
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
          <div className={styles.titleGoesHere1}>TITLE GOES HERE</div>
          <img className={styles.vectorIcon1} alt="" src="/vector-6.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
