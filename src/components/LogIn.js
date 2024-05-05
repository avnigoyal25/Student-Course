import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('ID:', id);
    console.log('Email:', email);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            ID:
            <input type="text" value={id} onChange={handleIdChange} style={styles.input} />
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} style={styles.input} />
          </label>
        </div>
        <button type="submit" style={styles.button} onClick={() => {navigate(`/dashboard/${id}`)}}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '400px',
    height:'400px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default Login;
