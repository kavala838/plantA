import React, { useState } from 'react';
import { IonContent, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    // Perform API call to login
    try {
      // Mock response for demonstration
      const data = { success: true };
      console.log(data); // Handle response accordingly

      // If login is successful, redirect to welcome page
      if (data.success) {
        // Store user session in sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');

        // Redirect to welcome page
        history.push('/welcome');
      } else {
        // Handle unsuccessful login (e.g., display error message)
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <IonContent className="ion-padding" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Login</h2>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label>Email</label>
          <IonInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{ marginBottom: '10px', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label>Password</label>
          <IonInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{ marginBottom: '10px', borderRadius: '5px' }}
          />
        </div>
        <IonButton expand="block" color="success" onClick={handleLogin} style={{ borderRadius: '5px', backgroundColor: '#4CAF50', color: '#fff' }}>Login</IonButton>
      </div>
    </IonContent>
  );
};

export default Login;
