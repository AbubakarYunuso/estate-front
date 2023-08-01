import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.foterLeft}>
            <img src="https://ru-ru.learn.canva.com/wp-content/uploads/sites/19/2020/07/paul-skorupskas-7KLa-xLbSXA-unsplash-2.jpg" alt="logo" className={styles.logo}/>
            <p>Все права защещины</p>
        </div>
        <div className={styles.foterRight}>
            <div className={styles.itemLeft}>
                <h2>OOO</h2>
                <p>OOO</p>
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
