import React from 'react'
import styles from "./imageHolder.module.scss"
import profilePicture from "../../../../resources/svgs/profilePicture.svg"
import rightBlob from "../../../../resources/svgs/rightBlob.svg"


const ImageHolder = () => {

  return (
    <>
      <div className={styles.imagesFlexBox}>
        <img alt="irregular shape" className={styles.svgIconTranslated} style={{ height: "30vw", opacity: "0.7" }} src={rightBlob} />
        <div className={styles.svgIcon}>
          <div className={styles.mask1}>
            <img className={styles.imageContainer} />
            {/* <img alt="irregular framed portrait" style={{ height: "30vw" }} src={profilePicture} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageHolder
