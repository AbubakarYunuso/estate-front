import { useDispatch, useSelector } from "react-redux";
import styles from "./auth.module.scss";
import { AppDispatch, RootState } from "../../app/store";
import * as React from "react";
import { fetchLogin } from "../../features/loginSlice";
import { userDataType } from "../../types/login";
import { useNavigate } from "react-router";
import Estate from "../../components/Estates/Estate";
import { Link } from "react-router-dom";
function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { error, token } = useSelector((state: RootState) => state.login);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const useData = { email, password } as userDataType;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchLogin(useData));
    setEmail("");
    setPassword("");
  };

  React.useEffect(() => {
    if (token) {
      navigate("/");
      location.reload();
    }
  }, [navigate, token]);

  return (
    <div className={styles.auth_block}>
      <Estate/>
      <div className={styles.auth}>
        <div className={styles.auth_block}>
          <div className={styles.container}>
            <div className={styles.auth_item}>
             <div className={styles.block_link_auth}>
              <Link className={styles.link_login} to="/login">АВТОРИЗАЦИЯ</Link>
              <Link className={styles.link_auth} to="/auth">РЕГИСТРАЦИЯ</Link>
             </div>
            <button onClick={() => navigate("/")} className={styles.btn_close}>&#10006;</button>
              <h2 >Войдите в личный кабинет, или зарегистрируйтесь</h2>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className={styles.auth_from}
              >
                <div className={styles.auth_input + " " + styles.input_email}>
                  <span>E-mail</span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                  />

                </div>
                <div
                  className={styles.auth_input + " " + styles.input_password}
                >
                  <span>Пароль</span>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                  />

                </div>
                <button className={styles.btn_auth}>ВОЙТИ</button>
              </form>

              {error && (
                <div style={{ color: "red" }} className={styles.auth_error}>
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
