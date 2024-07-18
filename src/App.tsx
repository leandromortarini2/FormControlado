import { useState } from "react";
import "./App.css";
import { IUser } from "./interface";
import { Validations } from "./Validations";

function App() {
  const [error, setError] = useState<IUser>({
    name: "",
    lastName: "",
    dni: 0,
    password: "",
  });

  const [input, setInput] = useState<IUser>({
    name: "",
    lastName: "",
    dni: 0,
    password: "",
  });

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });

    const newError = Validations(input);

    setError(newError);

    console.log(input);
  }

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // llamada a la funcion que realiza la solicitud
    alert("Registro exitoso");
    setInput({
      name: "",
      lastName: "",
      dni: 0,
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleOnChange}
          value={input.name}
        />
        {error.name && error.name.length > 0 ? <p>{error.name}</p> : null}
        <input
          type="text"
          name="lastName"
          onChange={handleOnChange}
          value={input.lastName}
        />

        <input
          type="text"
          name="dni"
          onChange={handleOnChange}
          value={input.dni}
        />
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          value={input.password}
        />
        <button>Register</button>
      </form>
    </>
  );
}

export default App;
