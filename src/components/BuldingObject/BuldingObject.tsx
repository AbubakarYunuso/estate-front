import { useEffect } from "react";
import styles from "./BuldingObject.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBuldingObject } from "../../features/buldingObjectSlice";
import { AppDispatch, RootState } from "../../app/store";
import houseImage from '../../acces/domOne.png'

function BuldingObject(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

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
          <div style={{ width: "50%" }}>
            <div className={styles.textFirstBlock}>Квартиры для России</div>
            <div className={styles.logoText}>от ООО Estate-Pro</div>
          </div>
        </div>
        <div className={styles.costyle}></div>
        <div className={styles.imageMain}>
          <img className={styles.imgInImageMain} src={houseImage} alt="" />
        </div>
      </div>
      <div className={styles.secondBlock}></div>
    </div>
  );
}

export default BuldingObject;
