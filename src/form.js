import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function validate(event) {
    event.preventDefault();

    if (username.length === 0) {
      alert("Please enter a username");
      return;
    }

    if (username.length < 4) {
      alert("Username must be at least 4 characters long");
      return;
    }

    if (password.length === 0) {
      alert("Please enter a password");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters long");
      return;
    }

    let uppercount = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toUpperCase()) {
        uppercount++;
      }
    }

    if (uppercount === 0) {
      alert("Password must contain at least one uppercase letter");
      return;
    }

    alert("Successfully updated");
  }

  return (
    <div className="App">
      <form>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={validate}>Submit</button>
      </form>
    </div>
  );
}

export default App;
