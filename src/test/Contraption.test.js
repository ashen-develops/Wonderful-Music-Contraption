import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Contraption from '../components/Contraption';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Contraption />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});