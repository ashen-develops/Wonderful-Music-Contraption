import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../components/SignUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});