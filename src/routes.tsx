import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Success from './pages/Success';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
