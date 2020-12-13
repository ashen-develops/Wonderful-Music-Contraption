import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Song from '../components/Song';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Song />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});