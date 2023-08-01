import styles from "./Installment.module.scss";
import houseImage from "../../acces/icons/4_7_-_.jpg";
import houseIcon from "../../acces/icons/bi_building.png";
import moneyIcon from "../../acces/icons/money.png";
import pasIcon from "../../acces/icons/ras.png";
import InputMask from "react-input-mask";
import {ChangeEvent, FormEvent, useState} from 'react'



function Installment() {

  const [text , setText] = useState('')
  const [email , setEmail] = useState('')
  const [number , setNumber] = useState('')

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    
    setText('')
    setEmail('')
    setNumber('')
  }

  const handleName = (e:ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value)
  }
  const handleEmail = (e: ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const handleNumber = (e: ChangeEvent<HTMLInputElement>)=>{
    setNumber(e.target.value)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstBlock}>
        <div className={styles.slogan}>
          <div style={{ width: "85%" }}>
            <div className={styles.textFirstBlock}>Рассрочка </div>
            <div className={styles.logoText}>с выгодными условиями</div>
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
      <div className={styles.textRasr}>Рассрочка от партнёров до 5 лет →</div>
      <div className={styles.thirdBlock}>
        <div className={styles.procentBlockContainer}>
          <div className={styles.procentBlock}>
            <div>5%</div>
          </div>
          <div className={styles.siz} ></div>
          <div className={styles.procentBlock}>
            <div>10%</div>
          </div>
          <div className={styles.sizTwo} ></div>
          <div className={styles.procentBlock}>
            <div>15%</div>
          </div>
          <div className={styles.sizTree} ></div>
          <div className={styles.procentBlock}>
            <div>25%</div>
          </div>
          <div className={styles.sizFour} ></div>
          <div className={styles.procentBlock}>
            <div>30%</div>
          </div>
        </div>
      </div>
      <div className={styles.textConsult}>Отправьте данные для получения консультации →</div>
      <div className={styles.fourBlock}>
          <form onSubmit={handleSubmit} className={styles.form} >
            <input className={styles.nameInput} onChange={handleName} value={text} placeholder="Ваше Имя" type="text" />
            <input className={styles.emailInput} onChange={handleEmail} value={email} placeholder="Ваш email: qwe@qweqwe.qwe" type="email" />
            <InputMask
            value={number}
            onChange={handleNumber}
              className={styles.numberInput}
              mask="+7 (999) 999-99-99"
              placeholder="+7 (000) 000-00-00"
            ></InputMask>
            <button className={styles.buttonInput}>Получить консультацию</button>
          </form>
      </div>
      
    </div>
  );
}

export default Installment;
