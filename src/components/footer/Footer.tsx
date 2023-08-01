
import { Placemark, Map, YMaps } from "@pbe/react-yandex-maps";
import tgIcon from "../../acces/icons/tgIconNeed.png";
import styles from "../BuldingObject//BuldingObject.module.scss"
function Footer() {
  return (
    <div className={styles.fiveBlock}>
    <article id="map"></article>
    <div className={styles.map}>
      <YMaps>
        <Map
          width="100%"
          height="650px"
          defaultState={{
            center: [43.323292, 45.738423],
            zoom: 18,
          }}
        >
          <Placemark geometry={[43.323292, 45.738423]} />
        </Map>
      </YMaps>
    </div>
    <div className={styles.aboutUs}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.headerAboutUs}>Связаться с нами:</div>
        <div className={styles.number}>+7(928) 017-04-12</div>
        <div className={styles.mainOfice}>Отдел продаж :</div>
        <div className={styles.street}>
          Чеченская республика, г.Грозный, ул.Льва Ящина,22
        </div>
        <div className={styles.tg}>
          {" "}
          <a target="_blank" href="https://t.me/Abubakar_Yunusov">
            {" "}
            <img className={styles.tgIcon} src={tgIcon} alt="" />{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer