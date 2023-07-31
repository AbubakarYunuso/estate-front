import React from "react";
import styles from "./header.module.scss";
import favicon from "../../acces/icons/favicon.ico";
import account from "../../acces/icons/account.svg";
import favorite from "../../acces/icons/favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";
import { fetchMe, logout } from "../../features/loginSlice";
// import iconExtit from "../../acces/icons/iconExit.png";

const Header = () => {
  const [openUser, setOpenUser] = React.useState<boolean>(false);
  const { token, user } = useSelector((state: RootState) => state.login);
const navigate = useNavigate();
  const handleOpenUser = () => {
    if (token) {
      return setOpenUser(!openUser);
    }
    navigate("login");
  };

  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMe())
  }, [dispatch])

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={favicon} alt="" />
      </div>
      <ul className={styles.menu}>
        <li>О нашей компании</li>
        <li>Наши ЖК</li>
        <li>Местоположение ЖК</li>
        <li>Условия рассрочки</li>
      </ul>
      <div className={styles.header_right}>
        <div className={styles.phone}>
          <img src={favorite} alt="" />
        </div>
        <div className={styles.phone}>
          <img  onClick={handleOpenUser} src={account} alt="" />
        </div>
        {openUser ? (
          <div className={styles.myInfo}>
            <p>
              <Link to={"/myAccount"}> &#128101; Личный кабинет</Link>
              <span className={styles.openUser_close} onClick={() => setOpenUser(!openUser)}>X</span>
            </p>

            <p>
              <span>Имя:</span>
              {user?.fullName}
            </p>
            <p>
              <span>email:</span>
              {user?.email}
            </p>
            {/* <img className={styles.iconExtit} src={iconExtit} alt="" /> */}
            <button
              onClick={() => {
                dispatch(logout()), setOpenUser(!openUser);
              }}
            >
              Выйти
            </button>
          </div>
        ) : null}
      </div>
      {token ? <></> : null}
    </div>
  );
};

export default Header;
