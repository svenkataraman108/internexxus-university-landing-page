import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.forUniversitiesLandingPageInner, className].join(" ")}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.scholarcapContent}>
          <div className={styles.scholarcapLink}>
            <img
              className={styles.scholarcapScrollIcon}
              loading="lazy"
              alt=""
              src="/scholarcap-scroll@2x.png"
            />
            <h1 className={styles.whatIsInternexxusContainer}>
              <span>{`What is `}</span>
              <span className={styles.internexxus}>Internexxus</span>
              <span>?</span>
            </h1>
          </div>
        </div>
        <h1 className={styles.weAreDedicated}>
          We are dedicated to bridging the current gap in academia and career
          that students face, especially in the recruitment process. Our job
          search platform directly involved universities and offers a
          comprehensive, user-friendly portal that not only provides access to a
          diverse array of high-quality opportunities available for even college
          freshman, but also allows a direct connection between the universities
          and companies seeking fresh, emerging talent. Our platform is
          meticulously designed to be intuitive and engaging, ensuring that
          students and graduates can effortlessly explore and secure positions
          that resonate with their skills, interests, and professional
          aspirations.
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent;
