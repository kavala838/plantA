import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Identification.module.css';
import { Link } from 'react-router-dom';

const Identification: React.FC = () => {
  const history = useHistory();

  // Check if user is logged in
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  // If user is not logged in, redirect to login page
  

  return (
    <div>
        <button className={styles.btn}>Upload</button>
        <div className={styles.container}>
        </div>
    </div>
  );
};

export default Identification;