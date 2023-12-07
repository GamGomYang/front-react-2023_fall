import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Album from './MainPage';
import Menubar from './Menubar';
import Guide from './Guide';
import LowBanner from './Lowbanner';



ReactDOM.render(
  <React.StrictMode>
    <div>
     
      <Menubar />
      <Album />
      <Guide />
      <LowBanner />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);



