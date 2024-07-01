import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import Section from "../components/Section";
import CompanyLogos from "../components/CompanyLogos";
import Section1 from "../components/Section1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./ForUniversitiesLandingPage.module.css";

const ForUniversitiesLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.forUniversitiesLandingPage}>
      <FrameComponent1 />
      <img
        className={styles.forUniversitiesLandingPageChild}
        alt=""
        src="/rectangle-319.svg"
      />
      <FrameComponent />
      <section className={styles.knowledgeInThe}>{`knowledge in the `}</section>
      <FrameComponent4 />
      <div className={styles.div} />
      <FrameComponent />
      <section className={styles.sectionParent}>
        <Section />
        <div className={styles.companyLogosParent}>
          <CompanyLogos />
          <Section1 />
        </div>
      </section>
      <section className={styles.reachOutMe}>
        <b className={styles.titleGoesHere}>TITLE GOES HERE</b>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit ame dolo reas consectetuer adipiscing elit sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat ame dolo.
        </div>
        <div className={styles.loremIpsumDolor1}>
          Lorem ipsum dolor sit ame dolo reas consectetuer adipiscing elit sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat ame dolo.
        </div>
        <img
          className={styles.contactShapeIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <FrameComponent3 />
        <div className={styles.text}>{` `}</div>
        <div className={styles.text1}>{` `}</div>
        <div className={styles.text2}>{` `}</div>
        <div className={styles.text3}>{` `}</div>
        <h1 className={styles.bookADemo}>Book a Demo With Us</h1>
        <div className={styles.contactInfo}>
          <div className={styles.infoContainer}>
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit ame dolo reas consectetuer adipiscing elit
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat ame dolo.
            </div>
          </div>
          <div className={styles.infoBackground} />
        </div>
        <img className={styles.shapeElementIcon} alt="" src="/vector-7.svg" />
        <img className={styles.bottomShapeIcon} alt="" src="/vector-8.svg" />
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default ForUniversitiesLandingPage;
