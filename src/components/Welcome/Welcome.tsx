import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  const history = useHistory();

  // Check if user is logged in
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    history.push('/login');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      

      
    </div>
    
  );
};

export default Welcome;


