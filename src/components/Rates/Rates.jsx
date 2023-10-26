import React from "react";
import styles from "./Rates.module.css";

const Rates = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <img src="./9.png" className={styles.ratesStyle} />
      <hr className={styles.divider} />
      <div className={styles.description}>
          <ul>
            <li>✓ Срок действия тарифа - 1 Месяц</li>
            <li>✓ 40 Поездок поездок</li>
            <li>✘ Платные пересадки</li>
            <li>✘ Платный проезд на Электропоездах</li>
            <li>✘ Очередь на обслуживание в центре ОТО</li>
          </ul>
      </div>
      <button className={styles.button}>Преобрести Тариф за 169 рублей</button>
    </div>
    <div className={styles.item}>
      <img src="./10.png" className={styles.ratesStyle} />
      <hr className={styles.divider} />
      <div className={styles.description}>
          <ul>
            <li>✓ Срок действия тарифа - 3 месяца</li>
            <li>✓ Можно совершить 120 поездок</li>
            <li>✓ Бесплатные пересадки</li>
            <li>✘ Платный проезд на Электропоездах</li>
            <li>✘ Очередь на обслуживание в центре ОТО</li>
          </ul>
      </div>
      <button className={styles.button}>Преобрести Тариф за 299 рублей</button>
    </div>
    <div className={styles.item}>
      <img src="./11.png" className={styles.ratesStyle} />
      <hr className={styles.divider} />

      <div className={styles.descriptionMax}>
          <ul>
            <li>✓ Срок действия тарифа - 1 год</li>
            <li>✓ Безлимитное кол-во поездок</li>
            <li>✓ Бесплатные пересадки</li>
            <li>✓ Бесплатный проезд на Электропоездах</li>
            <li>✓ Можно добавлять поездки другим аккаунтам</li>
            <li>✓ Кол-во поездок которые можно добавить - 100</li>
            <li>✓ Приоритетное обслуживание в центре ОТО</li>
          </ul>
      </div>
      <button className={styles.buttonMax}>Преобрести Тариф за 699 рублей</button> 
    </div>
  </div>
);

export default Rates;
