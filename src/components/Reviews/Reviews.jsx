import React from "react";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [inputText, setInputText] = React.useState("");

  const changeText = (event) => {
    console.log("change text", event);
    console.log("target", event.target.value);
    setInputText(event.target.value);
  };
  function click() {
    const user = sessionStorage.getItem("user");
    if (!user) {
      const newUser = prompt("Введите имя пользователя", "");
      console.log({newUser});
      if (localStorage.getItem('user') !== newUser) {
        const regUser = prompt("Зарегестрируйте имя пользователя", "");
        if (!regUser) {
          return;
        }
        localStorage.setItem("user", regUser);
        sessionStorage.setItem("user", regUser);
      } else {
        sessionStorage.setItem("user", newUser);
      }
    }

    console.log("click", user);
    const bodyChat = document.getElementById("bodyChat");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.className=styles.messageWrapp
    p.className=styles.message
    img.className=styles.image
    img.setAttribute('src', '/gjkmpjdfntkm.png')
    div.appendChild(img);
    div.appendChild(p);
    p.innerText = inputText;
    bodyChat.appendChild(div);
    setInputText("");
  }
  return (
    <div className={styles.container}>
      <div className={styles.chatWindow}>
        <div className={styles.title}>
          <p className={styles.titlelText}>Оставить отзыв о нас</p>
        </div>
        <div className={styles.body} id="bodyChat"></div>
        <div className={styles.actions}>
          <input
            className={styles.inputSt}
            type="text"
            name="text"
            value={inputText}
            onChange={changeText}
          />
          <input
            className={styles.buttonSt}
            type="button"
            value="Отправить"
            onClick={click}
          />
        </div>
        <div className={styles.Explanation}>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
