// import { useState } from "react";
// import './Form.css';
// function Form() {
//   const [sno, setNo] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//  const[formData,setFormData]=useState(null);
//   function validateForm() {
//     if (firstName.length === 0) {
//       alert("First name is empty");
//       return;
//     }

//     if (email.length === 0) {
//       alert("Email Address is empty");
//       return;
//     }
    

//     if (password.length < 8) {
//       alert(
//         "Invalid Form, Password must contain greater than or equal to 8 characters."
//       );
//       return;
//     }

//     let countUpperCase = 0;
//     let countLowerCase = 0;
//     let countDigit = 0;
//     let countSpecialCharacters = 0;

//     for (let i = 0; i < password.length; i++) {
//       const specialChars = [
//         "!",
//         "@",
//         "#",
//         "$",
//         "%",
//         "^",
//         "&",
//         "*",
//         "(",
//         ")",
//         "_",
//         "-",
//         "+",
//         "=",
//         "[",
//         "{",
//         "]",
//         "}",
//         ":",
//         ";",
//         "<",
//         ">",
//       ];

//       if (specialChars.includes(password[i])) {
//         countSpecialCharacters++;
//       } else if (!isNaN(password[i] * 1)) {
//         countDigit++;
//       } else {
//         if (password[i] === password[i].toUpperCase()) {
//           countUpperCase++;
//         }
//         if (password[i] === password[i].toLowerCase()) {
//           countLowerCase++;
//         }
//       }
//     }

//     if (countLowerCase === 0) {
//       alert(" Nolower case characters in password");
//       return;
//     }

//     if (countUpperCase === 0) {
//       alert("NO  upper case characters in password");
//       return;
//     }

//     if (countDigit === 0) {
//       alert("No  digit characters in password");
//       return;
//     }

//     if (countSpecialCharacters === 0) {
//       alert("No special characters in password");
//       return;
//     }

//     if (age < 20) {
//       alert("age must be greater than 20");
//     }


//     const data = {
//       sno,
//       firstName,
//       lastName,
//       mobile,
//       age,
//       email,
//       password,
//     };

//     setFormData(data);

//     alert("Form is valid");
    

//   }

//   return (
//     <div className="main">
//       <form>
//         <input placeholder="S.No" onChange={(e) => setNo(e.target.value)} />

//         <input placeholder="Sex" />

//         <input
//           placeholder="First Name"
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           placeholder="Mobile Number"
//           onChange={(e) => setMobile(e.target.value)}
//         />
//         <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
//         <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <input
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           onClick={() => {
//             validateForm();
//           }}
//           //   onClick={()=> validateForm()}
//         >
//           Submit
//         </button>
//       </form>



//       {formData && (
//         <div className="formData">
//           <h2>Form Data:</h2>
//           <pre>{JSON.stringify(formData, null, 2)}</pre>
//         </div>
//       )}
//     </div>


//   );
// }



// export default Form;

// import React, { useState } from 'react';
// import './Form.css';

// function RegistrationForm() {
//   const [id, setID] = useState('');
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [file, setFile] = useState(null);

//   const handleIDChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setID(value);
//     }
//   };

//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     if (/^[a-zA-Z]*$/.test(value)) {
//       setName(value);
//     }
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('ID:', id);
//     console.log('Name:', name);
//     console.log('Username:', username);
//     console.log('Password:', password);
//     console.log('File:', file);

//     alert('Form is submitted');

//     // Clear form fields after submission
//     addData();
//   };

//   const addData = () => {
//     setID('');
//     setName('');
//     setUsername('');
//     setPassword('');
//     setFile(null);
//   };

//   return (
//     <div className='RegistrationForm'>
//       <h2> Registration Form </h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>ID:</label>
//           <input
//             type="text"
//             value={id}
//             onChange={handleIDChange}
//             pattern="\d*"
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           /> 
//         </div>
//         <div>
//           <label>Upload File:</label>  
//           <input
//             type="file"
//             onChange={handleFileChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default RegistrationForm;

import React, { useState, useRef } from 'react';
import './Form.css';

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
          <label>ID:</label>
          <input
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



      
      
   