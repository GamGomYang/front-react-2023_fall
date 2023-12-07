import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Menubar.css';
import arlam from './images/icon/arlam.png';
import mypage from './images/icon/mypage.png';


function Menubar() {
  return (
    <div className="Menubar">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand navbar" href="/">
            <strong>KREAM</strong>
          </a>
          <img src={arlam} alt="Icon" className="arlam-icon" /> 
          <img src={mypage} alt="Icon" className="mypage-icon" />
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mens">나의 관심상품</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/womens">슈즈</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tops">의류</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bottoms">Magazine</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shoes">출시일정</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menubar;