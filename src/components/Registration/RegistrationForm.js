import React, { useState, useRef } from 'react';

function RegistrationForm() {
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const formRef = useRef(null);

  const handleIDChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setID(value);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setName(value);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID:', id);
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('File:', file);

    alert('Form is submitted');

    // Clear form fields after submission
    formRef.current.reset();
    setID('');
    setName('');
    setUsername('');
    setPassword('');
    setFile(null);
  };

  return (
    <div className='RegistrationForm'>
      <h2> Registration Form </h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='id'>ID:</label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={handleIDChange}
            pattern="\d*"
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          /> 
        </div>
        <div>
          <label>Upload File:</label>  
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
