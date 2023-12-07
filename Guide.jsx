import React from 'react';
import airforce from './images/Guide/airforce.png';
import jordandunk from './images/Guide/jordandunk.png';
import ugg from './images/Guide/ugg.png';
import yeezyboost from './images/Guide/yeezyboost.png';
import yeezyslider from './images/Guide/slider.png';
import './Guide.css';

const guideData = [
  {
    "Guide": "에어포스 구매자들을 위한 가이드",
    "imageUrl": airforce,
    "link": "https://stockx.com/ko-kr/nike"
  },
  {
    "Guide": "조던 구매자들을 위한 가이드",
    "imageUrl": jordandunk,
    "link": "https://stockx.com/ko-kr/adidas"
  },
  {
    "Guide": "UGG 구매자들을 위한 가이드",
    "imageUrl": ugg,
    "link": "https://stockx.com/ko-kr/new-balance"
  },
  {
    "Guide": "이지부스트 구매자들을 위한 가이드",
    "imageUrl": yeezyboost,
    "link": "https://stockx.com/ko-kr/crocs"
  },
  {
    "Guide": "이지슬라이드 구매자들을 위한 가이드",
    "imageUrl": yeezyslider,
    "link": "https://stockx.com/ko-kr/retro-jordans"
  }
];

const Guide = () => {
  return (
    <div>
      <h2 className="Guide-title"><strong> 구매 Guide & Tips </strong></h2>
      <ul className="Guide-list">
        {guideData.map((model, index) => (
          <li key={index} className="Guide-item">
            <div className="Guide-card">
              <a href={model.link}>
                <div className="Guide-image-container">
                  <img
                    src={model.imageUrl}
                    alt={model.Guide}
                    className="Guide-image"
                  />
                </div>
                <div className="Guide-details">
                  <p className="Guide-name"><strong>{model.Guide}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guide;