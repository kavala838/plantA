import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import './App.module.css';
import Identification from './components/Identification/Identification';

const App: React.FC = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  return (
    <IonApp className='ion-no-padding'>
      <IonReactRouter>
      <Navbar />
        <IonRouterOutlet>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute
            exact
            path="/welcome"
            component={Identification}
            isLoggedIn={isLoggedIn}
            redirectTo="/login"
          />
          <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
