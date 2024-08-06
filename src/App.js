// import { useState } from "react";
import "./App.css";
// import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return <Counter />;

  // const [name, setName] = useState("Madina");
  // const [age, setAge] = useState(22);
  // const [friends, setFriends] = useState(["Ziba", "Gulnur", "Mehin"]);
  // const [adress, setAdress] = useState({ name: "krakow", zip: 30384 });

  // return (
  //   <>
  //     <div>Hello {name}</div>
  //     <div>{age}</div>
  //     <button onClick={() => setName("Vusal")}>Click</button>
  //     <button onClick={() => setAge(24)}>Click Age</button>

  //     <br />
  //     <hr />
  //     <br />
  //     <h2>Friends:</h2>
  //     {friends.map((friend, index) => (
  //       <div key={index}>{friend}</div>
  //     ))}

  //     <button onClick={() => setFriends([...friends, "Pakiza"])}>
  //       Add friend
  //     </button>
  //     <br />
  //     <hr />

  //     <h2>Your Adress:</h2>
  //     <div>
  //       {adress.name} {adress.zip}
  //     </div>

  //     <button onClick={() => setAdress({ ...adress, zip: 40444 })}>
  //       Change Adress
  //     </button>
  //   </>

  //   // <User
  //   //   name="Madina"
  //   //   surname="Aghazada"
  //   //   isLoggin={false}
  //   //   friends={["Madina", "Vusal", "Farida"]}
  //   //   adress={{
  //   //     title:"krakow",
  //   //     zip:34303
  //   //   }}
  //   // />
  // );
}

export default App;
