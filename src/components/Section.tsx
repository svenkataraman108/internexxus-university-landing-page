import { FunctionComponent } from "react";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.everythingYourStudentsNeedWrapper}>
        <h1 className={styles.everythingYourStudents}>
          Everything your students need to
        </h1>
      </div>
      <div className={styles.div}>
        <h1 className={styles.secureATop}>{`secure a top internship. `}</h1>
      </div>
      <div className={styles.resources}>
        <div className={styles.topResources}>
          <div className={styles.divwNode4810adefDd5f5229}>
            <img
              className={styles.e7afd1117168d8522fbe5Img201Icon}
              loading="lazy"
              alt=""
              src="/634e7afd1117168d8522fbe5-img201png@2x.png"
            />
            <div className={styles.localContentWrapper}>
              <div className={styles.localContent}>
                <div className={styles.accessToLocalStartupsWrapper}>
                  <h1 className={styles.accessToLocal}>
                    Access to local startups
                  </h1>
                </div>
                <div className={styles.wePairUndergraduate}>
                  We pair undergraduate students, especially underclassmen, with
                  local startups in the area who are looking for innovation and
                  creativity.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divwNode4810adefDd5f52291}>
            <div className={styles.divwNode4810adefDd5f5229Inner}>
              <div className={styles.frameParent}>
                <div className={styles.readingWrapper}>
                  <img
                    className={styles.readingIcon}
                    loading="lazy"
                    alt=""
                    src="/reading.svg"
                  />
                </div>
                <h1 className={styles.alignOpportunitiesTo}>
                  Align opportunities to core curricula
                </h1>
              </div>
            </div>
            <div className={styles.facilitateDiverseInternship}>
              Facilitate diverse internship and experiential opportunities
              tailored to the fields and industries represented within your
              student body.
            </div>
          </div>
        </div>
        <div className={styles.topResources1}>
          <div className={styles.divwNode4810adefDd5f52292}>
            <div className={styles.e7af2f6791c6fea7ae4c3Image20} />
            <div className={styles.divwNode4810adefDd5f5229Child}>
              <div className={styles.researchContentParent}>
                <div className={styles.researchContent}>
                  <img
                    className={styles.researchIcon}
                    loading="lazy"
                    alt=""
                    src="/research.svg"
                  />
                </div>
                <h1 className={styles.priorityVisibilityTo}>
                  Priority Visibility to Top Companies
                </h1>
              </div>
            </div>
            <div className={styles.universitiesInOur}>
              Universities in our system will get access to opportunities and
              openings of applications from top companies, and will be able to
              streamline the process to their students immediately, giving them
              priority.
            </div>
          </div>
          <div className={styles.divwNode4810adefDd5f52293}>
            <div className={styles.schoolWrapper}>
              <img
                className={styles.schoolIcon}
                loading="lazy"
                alt=""
                src="/school@2x.png"
              />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.offerInterUniversityOpportuWrapper}>
                <h1 className={styles.offerInterUniversityOpportuContainer}>
                  <p
                    className={styles.offerInterUniversity}
                  >{`Offer inter-university `}</p>
                  <p className={styles.opportunities}>opportunities</p>
                </h1>
              </div>
              <div className={styles.connectStudentsTo}>
                Connect students to on-campus opportunities faster and more
                efficiently by providing a one-stop platform for career growth.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.builder}>
          <div className={styles.divwNode4810adefDd5f52294}>
            <div className={styles.boardWrapper}>
              <img
                className={styles.boardIcon}
                loading="lazy"
                alt=""
                src="/board.svg"
              />
            </div>
            <div className={styles.resumeContentParent}>
              <div className={styles.resumeContent}>
                <h1 className={styles.aiUniversityTemplateContainer}>
                  <p className={styles.aiUniversity}>AI University Template</p>
                  <p className={styles.resumeBuilder}>Resume Builder</p>
                </h1>
              </div>
              <div
                className={styles.studentsCanBuild}
              >{`Students can build resumes based on their university templates and preferences, all with just a click of a button. `}</div>
            </div>
          </div>
          <div className={styles.divwNode4810adefDd5f52295}>
            <div className={styles.eLearningWrapper}>
              <img
                className={styles.eLearningIcon}
                loading="lazy"
                alt=""
                src="/elearning.svg"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.accessRealtimeDataAndAnalyWrapper}>
                <h1 className={styles.accessRealtimeData}>
                  Access realtime data and analytics
                </h1>
              </div>
              <div className={styles.viewYourStudent}>
                View your student body’s performance and see how internship
                opportunities and the recruitment process compares to other
                schools. Students are also able to view other students progress
                and internship successes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
