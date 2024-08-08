import React, { useEffect, useState } from "react";
import {} from "./style.css";

function Fetch() {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((e) => console.log(e))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div className="fetch-container">
      Users:
      {isLoading && <div>LOADING...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Fetch;
