import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.realWorldContentParent}>
        <div className={styles.realWorldContent}>
          <h1 className={styles.helpStudentsApplyContainer}>
            <span className={styles.helpStudentsApplyContainer1}>
              <p
                className={styles.helpStudentsApply}
              >{`Help students apply their academic `}</p>
              <p className={styles.p}>{`                        `}</p>
            </span>
          </h1>
          <h1 className={styles.realWorld}>{`    real-world.  `}</h1>
        </div>
        <div className={styles.theInternexxusPlatformHostsWrapper}>
          <h1 className={styles.theInternexxusPlatformContainer}>
            <p
              className={styles.theInternexxusPlatform}
            >{`The Internexxus platform hosts over 4,000+ internships `}</p>
            <p
              className={styles.forUniversityStudents}
            >{`for university students to search from. `}</p>
          </h1>
        </div>
      </div>
      <div className={styles.featuresWrapper}>
        <div className={styles.features}>
          <div className={styles.realtimeAnalytics}>
            <div className={styles.realtimeAnalyticsChild} />
            <div className={styles.featuresIcons}>
              <div className={styles.icon}>
                <div className={styles.iconChild} />
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className={styles.burstTheCollegeBubbleParent}>
              <h2 className={styles.burstTheCollege}>
                Burst the college bubble
              </h2>
              <div className={styles.breakOutOfTheUniversityBWrapper}>
                <div className={styles.breakOutOf}>
                  Break out of the university “bubble” and access real-time
                  updates in your students’ recruitment cycles.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.collaborateSecurely}>
            <div className={styles.collaborateSecurelyChild} />
            <div className={styles.iconWrapper}>
              <div className={styles.icon2}>
                <div className={styles.iconItem} />
                <img className={styles.icon3} alt="" src="/icon-1.svg" />
              </div>
            </div>
            <div className={styles.findOutWhatRecruitersWantParent}>
              <h2 className={styles.findOutWhatContainer}>
                <p
                  className={styles.findOutWhat}
                >{`Find out what recruiters `}</p>
                <p className={styles.want}>want</p>
              </h2>
              <div className={styles.getRealTimeAnalyticsAndFeWrapper}>
                <div
                  className={styles.getRealTime}
                >{`Get real time analytics and feedback from recruiters on what they value most during the hiring process. `}</div>
              </div>
            </div>
          </div>
          <div className={styles.embeddedAnalytics}>
            <div className={styles.embeddedAnalyticsChild} />
            <div className={styles.iconContainer}>
              <div className={styles.icon4}>
                <div className={styles.iconInner} />
                <img className={styles.icon5} alt="" src="/icon-2.svg" />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.democratizeAccessWrapper}>
                <h2 className={styles.democratizeAccess}>Democratize Access</h2>
              </div>
              <div
                className={styles.studentsCanAccess}
              >{`Students can access internships in all fields and of all calibres regardless of their own backgrounds. `}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
