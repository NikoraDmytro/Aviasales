import globe from "shared/img/globe.png";
import plane from "shared/img/plane.png";

import styles from "./CompanyLogo.module.scss";

export const CompanyLogo = () => (
  <div className={styles.companyLogo}>
    <img src={globe} alt="" className={styles.globe} />
    <img src={plane} alt="" className={styles.plane} />
  </div>
);
