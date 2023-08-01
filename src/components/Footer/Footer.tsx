import React from 'react'
import styles from './footer.module.scss'
import favicon from "../../acces/icons/favicon.ico";
export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.foterLeft}>
            <img src={favicon} className={styles.logo}/>
            <p> &copy; Все права защещины</p>
        </div>
        <div className={styles.foterRight}>
            <div className={styles.itemLeft}>
                <h2>OOO &laquo;Estate-Pro&raquo;</h2>
                <p>OOO &laquo;Estate-Pro&raquo;</p>
                <p>ИНН 2003744675</p>
                <p>КПП 2458596352</p>
                <p>Директор Тсуцаев Джамлейл</p>
                <p>Юр. адресс: 40028364</p>
                <p>Чеченская республика</p>
                <p>г. Грозный ул. Трошева 16</p>
                <p>офис 1</p>
            </div>
            <div className={styles.itemRight}>
                <h2>ОТДЕЛ ПРОДАЖ:</h2>
                <p>Чеченская республика</p>
                <p>г. Грозный ул. Трошева 16</p>
            </div>
        </div>

    </div>
  )
}
