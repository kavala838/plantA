import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory();

  // Check if user is logged in
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  // If user is not logged in, redirect to login page
  

  return (
    <div className={`${styles.navbar} ${styles.flexContainer} ${styles.noMP}`}>
            <div className={styles.flexCenter}>
                <ul className={styles.flexCenter} style={{listStyleType: 'none'}}>
                    <li><Link to='/'>Home</Link></li>
                    {isLoggedIn && (<li><Link to='/welcome'>Plant Identification</Link></li>)}
                    {isLoggedIn && (<li><Link to='/plantJournal'>My Plant Journal</Link></li>)}
                    {isLoggedIn && (<li><Link to='/guide'>Plant Care Guide</Link></li>)}
                    <li><Link to='/us'>Contact us</Link></li>
                </ul>
            </div>
            <div className={`${styles.btnSec} ${styles.flexCenter}`}>
                { !isLoggedIn && (<button className={`${styles.marR} ${styles.btn}`}>Log In</button>)}
                { !isLoggedIn && (<button className={`${styles.marL} ${styles.btn}`}>Sign Up</button>)}
            </div>
        </div>
    
  );
};

export default Navbar;