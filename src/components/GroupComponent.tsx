import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  group47?: string;
  resourceHeadingHref: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  group47,
  resourceHeadingHref,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={groupDivStyle}
    >
      <img className={styles.frameChild} loading="lazy" alt="" src={group47} />
      <div className={styles.resourceTitle}>
        <a
          className={styles.resourceHeading}
          href={resourceHeadingHref}
          target="_blank"
        >
          <span>
            <p className={styles.p}>{`                           `}</p>
            <p className={styles.p1}>{`                                 `}</p>
            <p className={styles.p2}>{`                              `}</p>
            <p
              className={styles.p3}
            >{`                                       `}</p>
            <p className={styles.p4}>{`                                  `}</p>
            <p
              className={styles.p5}
            >{`                                          `}</p>
          </span>
        </a>
      </div>
    </div>
  );
};

export default GroupComponent;
