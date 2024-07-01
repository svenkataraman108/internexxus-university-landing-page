import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onOnboardingImageClick = useCallback(() => {
    // Please sync "Personal Details" to the project
  }, []);

  return (
    <section
      className={[styles.forUniversitiesLandingPageInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.forCandidatesAboutUsForEmParent}>
            <h3 className={styles.forCandidatesAboutContainer}>
              <span
                className={styles.forCandidates}
              >{`For Candidates              About Us             For Employers    `}</span>
              <span className={styles.forUniversities}> For Universities</span>
              <span className={styles.podcasts}> Podcasts</span>
            </h3>
            <div className={styles.bookADemoWrapper}>
              <a className={styles.bookADemo}>{`Book a Demo ->`}</a>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.titleContentParent}>
            <div className={styles.titleContent}>
              <h1 className={styles.title}>College-to-Career</h1>
            </div>
            <h1 className={styles.pipelineInternshipPlatform}>
              Pipeline Internship Platform
            </h1>
          </div>
          <div className={styles.reinforceAndPushThousandsOWrapper}>
            <h1
              className={styles.reinforceAndPush}
            >{`Reinforce and push thousands of internship opportunities directly to your students. `}</h1>
          </div>
          <div className={styles.universityOnboardingWrapper}>
            <div className={styles.universityOnboarding}>
              <div
                className={styles.onboardingImage}
                onClick={onOnboardingImageClick}
              />
              <h1 className={styles.onboardYourUniversity}>
                Onboard your University
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
