import React, { useState } from 'react';
import './App.css'
function App() {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o email submetido, por exemplo, enviar para um servidor ou validar
    console.log('Email submetido:', email);
  };

  return (
    <div >
    <div >
      <h2>Formulário de Email</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
         <input
            type="email"
            value={email}
            onChange={handleInputChange}
            required
          />

        <button type="submit">Enviar</button>
      </form>
      </div>
    </div>
  );
}

export default App;
