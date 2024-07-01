import { FunctionComponent } from "react";
import Blockquote from "./Blockquote";
import styles from "./Section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <div className={styles.testimonialHeading}>
        <h1 className={styles.lovedByStudents}>Loved By Students</h1>
      </div>
      <img
        className={styles.lampIcon}
        loading="lazy"
        alt=""
        src="/lamp@2x.png"
      />
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialQuotes}>
          <div className={styles.blockquote}>
            <div className={styles.mySonWho}>
              My son who works in IT suggested I try this app after I was
              getting lots of strange messages and things happening on my phone.
              Since running it once a week I have had no viruses or malware
              problems. I also got a VPN app so I think with both I’m all set!
            </div>
          </div>
          <Blockquote
            doesExactlyWhatItSaysClea="Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app."
            colinandmandy94="colinandmandy94"
          />
          <Blockquote
            doesExactlyWhatItSaysClea="Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check.is a great bonus. Check any email of they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend."
            colinandmandy94="Jennifer Black"
          />
          <Blockquote
            doesExactlyWhatItSaysClea="This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive."
            colinandmandy94="Phillip Colligan"
          />
          <div className={styles.blockquote1}>
            <div className={styles.svgParent}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <img className={styles.svgIcon1} alt="" src="/svg-1.svg" />
            </div>
            <div className={styles.iWishThey}>
              I wish they had a VPN, I’d be signing up for that too. Apart from
              that the app is top notch. I had Certo on my last phone and it was
              the first app I put on this phone when I got it from the store.
              The scanner and other parts of the app are really easy and simple
              to use, even for a non-techie like me
            </div>
            <div className={styles.leslieCarrillo}>Leslie Carrillo</div>
          </div>
        </div>
        <div className={styles.appStoreButtons}>
          <div className={styles.buttonContainer}>
            <img
              className={styles.bookIcon}
              loading="lazy"
              alt=""
              src="/book@2x.png"
            />
            <img
              className={styles.appleIcon}
              loading="lazy"
              alt=""
              src="/apple@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
