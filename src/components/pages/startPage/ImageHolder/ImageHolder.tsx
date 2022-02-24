import React from 'react'
import { useHistory } from "react-router-dom";
import InfoBox from "./InfoBox/InfoBox"
import styles from "./imageHolder.module.scss"
import arrowIcon from "../../../../resources/icons/arrow.svg";

const ImageHolder = () => {

  let history = useHistory();

  return (
    <div className={styles.imageContainer}>
      <div className={styles.infoBoxesContainer}>
        <InfoBox infoText={"Education"} />
        <InfoBox infoText={"Proffesional experience"} />
      </div>
      <img onClick={() => history.push("/projects")} className={styles.arrow} src={arrowIcon} />
    </div>
  )
}

export default ImageHolder
