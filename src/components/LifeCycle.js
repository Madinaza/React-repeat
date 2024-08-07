import { useEffect, useState } from "react";

function LifeCycle() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Madina");

  useEffect(() => {
    console.log("artir");
  });
  useEffect(() => {
    console.log("change name");
  }, [name]);
  return (
    <>
      <div>number:{number}</div>
      <br />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        click
      </button>

      <div>name:{name}</div>
      <br />
      <button
        onClick={() => {
          setName("Vusal");
        }}
      >
        click
      </button>
    </>
  );
}
export default LifeCycle;
