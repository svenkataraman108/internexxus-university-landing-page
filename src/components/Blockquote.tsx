import { FunctionComponent } from "react";
import styles from "./Blockquote.module.css";

export type BlockquoteType = {
  className?: string;
  doesExactlyWhatItSaysClea?: string;
  colinandmandy94?: string;
};

const Blockquote: FunctionComponent<BlockquoteType> = ({
  className = "",
  doesExactlyWhatItSaysClea,
  colinandmandy94,
}) => {
  return (
    <div className={[styles.blockquote, className].join(" ")}>
      <div className={styles.svgParent}>
        <img className={styles.svgIcon} alt="" src="/svg.svg" />
        <img className={styles.svgIcon1} alt="" src="/svg-1.svg" />
        <img className={styles.svgIcon2} alt="" src="/svg-2.svg" />
        <img className={styles.svgIcon3} alt="" src="/svg-3.svg" />
        <img className={styles.svgIcon4} alt="" src="/svg-4.svg" />
      </div>
      <div className={styles.doesExactlyWhat}>{doesExactlyWhatItSaysClea}</div>
      <div className={styles.colinandmandy94}>{colinandmandy94}</div>
    </div>
  );
};

export default Blockquote;
