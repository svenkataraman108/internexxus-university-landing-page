import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent21.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footerContentParent, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <div className={styles.resourceLinks}>
            <GroupComponent
              group47="/group-47@2x.png"
              resourceHeadingHref="https://www.instagram.com/urvikdesign"
            />
          </div>
          <div className={styles.linkColumns}>
            <div className={styles.linkItemsWrapper}>
              <a
                className={styles.linkItems}
                href="https://www.linkedin.com/in/urvikmoradiya"
                target="_blank"
              >
                <span>
                  <p className={styles.p}>{`                           `}</p>
                  <p
                    className={styles.p1}
                  >{`                                 `}</p>
                  <p
                    className={styles.p2}
                  >{`                              `}</p>
                  <p
                    className={styles.p3}
                  >{`                                       `}</p>
                  <p
                    className={styles.p4}
                  >{`                                  `}</p>
                  <p
                    className={styles.p5}
                  >{`                                          `}</p>
                </span>
              </a>
            </div>
          </div>
          <GroupComponent
            group47="/group.svg"
            resourceHeadingHref="https://dribbble.com/urvik-moradiya"
            propAlignSelf="unset"
            propPadding="12.6px 2px 4px"
            propWidth="102.7px"
          />
          <div className={styles.linkColumns1}>
            <div className={styles.textWrapper}>
              <a
                className={styles.text}
                href="https://urvikmoradiya.gumroad.com"
                target="_blank"
              >
                <span>
                  <p className={styles.p6}>{`                           `}</p>
                  <p
                    className={styles.p7}
                  >{`                                 `}</p>
                  <p
                    className={styles.p8}
                  >{`                              `}</p>
                  <p
                    className={styles.p9}
                  >{`                                       `}</p>
                  <p
                    className={styles.p10}
                  >{`                                  `}</p>
                  <p
                    className={styles.p11}
                  >{`                                          `}</p>
                </span>
              </a>
            </div>
          </div>
          <div className={styles.linkColumns2}>
            <div className={styles.frameParent}>
              <div className={styles.socialIconParent}>
                <div className={styles.socialIcon} />
                <img
                  className={styles.socialLinkIcon}
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
              <a
                className={styles.text1}
                href="https://graphicriver.net/user/prolib/portfolio"
                target="_blank"
              >
                <span className={styles.textTxt}>
                  <p className={styles.p12}>{`                           `}</p>
                  <p
                    className={styles.p13}
                  >{`                                 `}</p>
                  <p
                    className={styles.p14}
                  >{`                              `}</p>
                  <p
                    className={styles.p15}
                  >{`                                       `}</p>
                  <p
                    className={styles.p16}
                  >{`                                  `}</p>
                  <p
                    className={styles.p17}
                  >{`                                          `}</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataVisualization}>
        <div className={styles.visualizationContent}>
          <div className={styles.dataContainer}>
            <div className={styles.dataPoints}>
              <div className={styles.dataIcons}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-10.svg"
                />
                <div className={styles.divider}>
                  <div className={styles.separator}>01</div>
                </div>
                <div className={styles.data}>DATA</div>
              </div>
              <div className={styles.dataIcons1}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.wrapper}>
                  <div className={styles.div}>02</div>
                </div>
                <div className={styles.data1}>DATA</div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon2} alt="" src="/vector-12.svg" />
              <div className={styles.separator1}>
                <div className={styles.div1}>03</div>
              </div>
              <div className={styles.data2}>DATA</div>
            </div>
          </div>
        </div>
        <div className={styles.titleGoesHereParent}>
          <div className={styles.titleGoesHere}>TITLE GOES HERE</div>
          <div className={styles.firstIconParent}>
            <img className={styles.firstIcon} alt="" src="/vector-13.svg" />
            <img className={styles.secondIcon} alt="" src="/vector-14.svg" />
            <img className={styles.thirdIcon} alt="" src="/vector-15.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent2;
