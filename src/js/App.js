import React from 'react';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import SettingsView from './views/Settings';
import RegisterView from './views/Register';

import Navbar from './components/Navbar';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/chat:id">
            <ChatView />
          </Route>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}