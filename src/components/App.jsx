import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Main/MainPage";
import Reviews from "./Reviews/Reviews";
import Directions from "./Routes/Routers";
import Drivers from "./Rates/Drivers";
import Rates from "./Rates/Rates";
import styles from "./AppSt.module.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route
              index
              element={
                <div className={styles.text}>
                  <h1>
                    Добро пожаловать на сайт общественного транспорта г. Огурцы,
                    Владимираской Области.
                  </h1>
                  <div>
                    <p>
                      Здесь вы сможете посмотреть маршруты нашего транспорта,
                      стоимость тарифов для проезда, найти наших водителей в
                      встроенном сервисе "Найти Водителя.рф", а так же написать
                      отзыв о нашем транспорте.
                    </p>

                    <h3>Наш город на карте и фотографиях</h3>
                    <div className={styles.image}>
                    <p>[проспект Республики Коми]</p>
                      <div className={styles.imageSize}>
                        <a
                          href="https://yandex.ru/maps/?um=constructor%3A09511bb66b502f0376cebddd6190f85407582ecbdbc9109c8895b4ffdaadb0dd&amp;source=constructorStatic"
                          target="_blank"
                        >
                          <img
                            src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A09511bb66b502f0376cebddd6190f85407582ecbdbc9109c8895b4ffdaadb0dd&amp;width=600&amp;height=450&amp;lang=ru_RU"
                            alt=""
                          />
                        </a>
                      </div>
                      <p>[проспект Республики Коми]</p>
                      <div className={styles.imageSize}>
                        <img className={styles.imageRazmer} src="/13.jpg" />
                      </div>
                      <p>[Восточный городской Парк]</p>
                      <div className={styles.imageSize}>
                        <img className={styles.imageRazmer} src="/18.jpg" />
                      </div>
                      <p>[Улица Костлявая]</p>
                      <div className={styles.imageSize}>
                        <img className={styles.imageRazmer} src="/1499240617_img_2995.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="reviews" element={<Reviews />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="routes" element={<Directions />} />
            <Route path="rates" element={<Rates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
