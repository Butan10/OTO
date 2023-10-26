import * as React from "react";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";

export default function Drivers() {
  return (
    <div>
      <h1>Найти Водителя.рф</h1>

      <p>
        Тут вы можете найти водителя нашего городского транспорта!
      </p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function randomUser() {
  let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return users[Math.floor(Math.random() * users.length)];
}

function Home() {
  let [searchParams, setSearchParams] = useSearchParams();

  let user = searchParams.get("user");

  let [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    let abortController = new AbortController();

    async function getSwapiUser() {
      let response = await fetch(`https://swapi.dev/api/people/${user}`, {
        signal: abortController.signal,
      });
      if (!abortController.signal.aborted) {
        let data = await response.json();
        setUserData(data);
      }
    }

    if (user) {
      getSwapiUser();
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("user");
    if (!newUser) return;
    setSearchParams({ user: newUser });
  }

  function handleRandomSubmit(event) {
    event.preventDefault();
    let newUser = randomUser();
    if (newUser === user) {
      handleRandomSubmit(event);
    } else {
      setSearchParams({ user: newUser });
    }
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <label>
            <input defaultValue={user ?? undefined} type="text" name="user" />
          </label>
          <button type="submit">Найти</button>
        </form>
        <form onSubmit={handleRandomSubmit}>
          <input type="hidden" name="random" />
          <button type="submit">Рандом</button>
        </form>
      </div>

      {userData && (
        <div
          style={{
            padding: "24px",
            margin: "24px 0",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            width={200}
            height={200}
            src={userData.img}
            alt={userData.eye_color}
          />
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
