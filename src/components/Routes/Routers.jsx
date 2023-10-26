import styles from "./Routers.module.css";

const Directions = () => {
  const buses = [
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №1",
      route: "Улица Коньковская - Просп. Республики Коми",
      time: "с 6:00 по 22:00",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №2",
      route: 'Костлявая Улица - Платформа "Огуречная" ',
      time: "Круглосуточно",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №3",
      route: 'Улица Агрономов - Платформа "Огуречная" ',
      time: "с 5:35 по 23:00",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №4",
      route: "Улица Мелиоративная - Восточный Парк",
      time: "с 6:00 по 22:00",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №5",
      route: "Сельхоз Колледж - Южный Обход г. Огурцы",
      time: "с 6:00 по 22:00",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №6",
      route: 'Владимирская Улица - СНТ "Красный Сад" ',
      time: "с 6:00 по 22:00",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №7",
      route: "д. Лунёвский - Улица Металолитейная",
      time: "с 7:00 по 20:00",
    },
    {
      imageSrc: "./Bus.png",
      title: "Маршрут №8",
      route: ' СНТ "Тихое" - Платформа "Огуречная"',
      time: "Круглосуточно",
    },
  ];

  const trains = [
    {
      imageSrc: "./Train.png",
      title: "Поезд №1",
      route: "Москва. Восточный Вкз - Нижний Новгород",
      time: "Круглосуточно",
    },
    {
      imageSrc: "./Train.png",
      title: "Поезд №2",
      route: "Н. Новгород - Владимир",
      time: "Круглосуточно",
    },
    {
      imageSrc: "./Train.png",
      title: "Областная Рейсовая Электричка",
      route: "Владимир - Платформа 'Ковров' ",
      time: "с 4:55 до 23:30",
    },
  ];
  return (
    <div>
      <div className={styles.chapter}>
        <div className={styles.list}>
          <div>
            {buses.map(({ imageSrc, title, route, time }) => {
              return (
                <div className={`${styles.object} ${styles.buses}`}>
                  <div className={styles.divImage}>
                    <img className={styles.image} src={imageSrc} alt="" />
                  </div>
                  <div className={styles.divCard}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.routeTitle}>{route}</p>
                    <p className={styles.timeTitle}>{time}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {trains.map(({ imageSrc, title, route, time }) => {
              return (
                <div className={`${styles.object} ${styles.trains}`}>
                  <div className={styles.divImage}>
                    <img className={styles.image} src={imageSrc} alt="" />
                  </div>
                  <div className={styles.divCard}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.routeTitle}>{route}</p>
                    <p className={styles.timeTitle}>{time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
