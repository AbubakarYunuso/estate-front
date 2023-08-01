import { useEffect } from "react";
import styles from "./BuldingObject.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBuldingObject } from "../../features/buldingObjectSlice";
import { AppDispatch, RootState } from "../../app/store";
import houseImage from "../../acces/domOne.png";
import houseIcon from "../../acces/icons/bi_building.png";
import moneyIcon from "../../acces/icons/money.png";
import pasIcon from "../../acces/icons/ras.png";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

function BuldingObject(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const buldingObject = useSelector(
    (state: RootState) => state.buldingObject.state
  );

  useEffect(() => {
    dispatch(getBuldingObject());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstBlock}>
        <div className={styles.slogan}>
          <div style={{ width: "53%" }}>
            <div className={styles.textFirstBlock}>Квартиры по всей России</div>
            <div className={styles.logoText}>от ООО ESTATE-PRO</div>
          </div>
        </div>
        <div className={styles.costyle}></div>
        <div className={styles.imageMain}>
          <img className={styles.imgInImageMain} src={houseImage} alt="" />
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <img src={houseIcon} alt="" />
            </div>
            <div className={styles.textIcon}>
              Строительство строго по графику
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <img src={moneyIcon} alt="" />
            </div>
            <div className={styles.textIcon}>
              Рассрочка от застройщика с первоначальным взносом и без
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <img src={pasIcon} alt="" />
              <article style={{ transition: ".3s" }} id="about"></article>
            </div>
            <div className={styles.textIcon}>
              Рассрочка от партнёров до 5 лет с минимальной наценкой
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdBlock}>
        <div className={styles.thirdBlockHeader}>
          <div className={styles.headerLogoAndText}>
            <div className={styles.headerLogo}>
              О НАС И НАШЕЙ МИССИИ КАК ЗАСТРОЙЩИКОВ
            </div>
            <div className={styles.headerText}>
              СТРОИТЕЛЬНАЯ КОМПАНИЯ ESTATE-PRO»
            </div>
          </div>
        </div>
        <div className={styles.thirdBlockDesc}>
          <div className={styles.descText}>
            <div className={styles.TextFirst}>
              ООО «Estate-Pro» — ведущий застройщик Чеченской Республики,
              работающий на рынке жилой недвижимости с 2003 года.
            </div>
            <div className={styles.TextSecond}>
              Представляем собой динамично-развивающуюся строительную компанию,
              ориентированную на создание гибких условий для каждого покупателя.
            </div>
            <div className={styles.TextThird}>
              Объекты компании представлены по всей России. Мы строим Россию!
            </div>
          </div>
        </div>
      </div>
      <article id="buldingObject"></article>
      <div className={styles.buldingObjectText}>НАШИ ЖИЛЫЕ КОМПЛЕКСЫ →</div>
      <div className={styles.fourBlock}>
        <div className={styles.buldingObjectCarts}>
          {buldingObject.map((item) => {
            return (
              <div
                onClick={() => navigate("/estate")}
                key={item._id}
                className={styles.cartContainer}
              >
                <img
                  className={styles.cartImage}
                  src={`http://localhost:4000/${item.image[0]}`}
                  alt=""
                />
                <div className={styles.cartName}>{item.name}</div>
                <div className={styles.cartGeo}>{item.geo}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BuldingObject;
