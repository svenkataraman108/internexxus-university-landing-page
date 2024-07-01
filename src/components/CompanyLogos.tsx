import { FunctionComponent, useCallback } from "react";
import styles from "./CompanyLogos.module.css";

export type CompanyLogosType = {
  className?: string;
};

const CompanyLogos: FunctionComponent<CompanyLogosType> = ({
  className = "",
}) => {
  const onMedicalTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='medicalBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={[styles.companyLogos, className].join(" ")}>
      <div className={styles.div}>
        <div className={styles.trustedByTop}>Trusted by Top Companies</div>
      </div>
      <div className={styles.div1}>
        <img className={styles.divIcon} alt="" src="/div-1.svg" />
        <div className={styles.logosContainer}>
          <div className={styles.divParent}>
            <img className={styles.divIcon1} alt="" src="/div-2.svg" />
            <img className={styles.divIcon2} alt="" src="/div-3.svg" />
          </div>
          <div className={styles.div2} />
        </div>
        <div className={styles.divGroup}>
          <div className={styles.div3}>
            <img
              className={styles.bd2229533018e0c22c97bNetflixIcon}
              loading="lazy"
              alt=""
              src="/626bd2229533018e0c22c97b-netflixsvg.svg"
            />
          </div>
          <img className={styles.divIcon3} alt="" src="/div-4.svg" />
          <img className={styles.divIcon4} alt="" src="/div-5.svg" />
        </div>
      </div>
      <img
        className={styles.middleLeft2pngIcon}
        alt=""
        src="/middleleft2png@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.ups2Icon} alt="" src="/ups-2@2x.png" />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.operationsManagementInternWrapper}>
              <h2 className={styles.operationsManagementIntern}>
                Operations Management Intern
              </h2>
            </div>
            <div className={styles.processEngineerInternship}>
              <div className={styles.researchAnalystInternship}>
                <div className={styles.internshipType}>
                  <img
                    className={styles.typeIcon}
                    alt=""
                    src="/type-icon@2x.png"
                  />
                  <div className={styles.typeName}>
                    <h3 className={styles.operations}>Operations</h3>
                  </div>
                </div>
              </div>
              <div className={styles.hourlyType}>
                <img
                  className={styles.hourIcon}
                  alt=""
                  src="/hour-icon@2x.png"
                />
                <div className={styles.hourlyRate}>
                  <div className={styles.hour}>$37/hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img
          className={styles.ups8Icon}
          loading="lazy"
          alt=""
          src="/ups-8@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.processEngineerGraduateInteWrapper}>
              <h2 className={styles.processEngineerGraduate}>
                Process Engineer Graduate Intern
              </h2>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.rectangleContainer}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/type-icon@2x.png"
                  />
                  <div className={styles.engineeringWrapper}>
                    <h3 className={styles.engineering}>Engineering</h3>
                  </div>
                </div>
              </div>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/hour-icon@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.medicalInternship}>
        <div className={styles.medicalContent}>
          <div
            className={styles.medicalBackground}
            data-scroll-to="medicalBackground"
          />
          <div className={styles.uPSLogoContainer}>
            <img className={styles.ups5Icon} alt="" src="/ups-5@2x.png" />
          </div>
          <div className={styles.medicalDetails}>
            <div className={styles.medicalRole}>
              <div className={styles.roleContainer}>
                <div className={styles.roleDetails}>
                  <h3 className={styles.medical} onClick={onMedicalTextClick}>
                    Medical
                  </h3>
                </div>
                <img
                  className={styles.fieldIcon}
                  alt=""
                  src="/hour-icon@2x.png"
                />
              </div>
            </div>
            <div className={styles.internshipTitle}>
              <h2 className={styles.respiratoryCareIntern}>
                Respiratory Care Intern
              </h2>
            </div>
            <div className={styles.locationContainer}>
              <img
                className={styles.locationIcon}
                alt=""
                src="/type-icon@2x.png"
              />
              <div className={styles.locationPlaceholderWrapper}>
                <div className={styles.locationPlaceholder}>$120,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ups7Icon} alt="" src="/ups-7@2x.png" />
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent1}>
            <div className={styles.researchAnalystInternWrapper}>
              <h2 className={styles.researchAnalystIntern}>
                Research Analyst Intern
              </h2>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/type-icon@2x.png"
                />
                <div className={styles.researchIntern}>
                  <h3 className={styles.researchAnalystIntern1}>
                    Research Analyst Intern
                  </h3>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/hour-icon@2x.png"
                />
                <div className={styles.wrapper}>
                  <div className={styles.div4}>$120,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
