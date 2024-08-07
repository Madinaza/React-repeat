import { useState } from "react";

function InputExample() {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");

const [value,setValue]=useState({name:'',surname:''});

  const onChange=(event)=>{
    setValue({...value,[event.target.name]:event.target.value})
  }

  return (
    <div>
      Please enter your name: <br />
      <input name='name' value={value.name} onChange={onChange} />
      <br />
      name: {value.name} <br />

      Please enter your Surname: <br />
      <input name='surname' value={value.surname} onChange={onChange} />
      <br />
      name: {value.surname} <br />

    </div>
  );
}

export default InputExample;
