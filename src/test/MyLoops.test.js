import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyLoops from '../components/MyLoops';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MyLoops />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});