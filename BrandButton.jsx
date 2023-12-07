import React from 'react';
import './BrandButton.css'; 
import nike from './images/brand/nike.png';
import adidas from './images/brand/adidas.png';
import newbalace from './images/brand/newbalance.png';
import crocs from './images/brand/crocs.png';
import jordon from './images/brand/jordon.png';

const BrandModel = () => {
  const popularModelsData = [
    {
      brand: 'NIKE',
      imageUrl: nike,
      link: 'https://stockx.com/ko-kr/nike',
    },
    {
      brand: 'ADIDAS',
      imageUrl: adidas,
      link: 'https://stockx.com/ko-kr/adidas',
    },
    {
      brand: 'NEW BALANCE',
      imageUrl: newbalace,
      link: 'https://stockx.com/ko-kr/new-balance',
    },
    {
      brand: 'CROCS',
      imageUrl: crocs,
      link: 'https://stockx.com/ko-kr/crocs',
    },
    {
      brand: 'JORDON',
      imageUrl: jordon,
      link: 'https://stockx.com/ko-kr/retro-jordans',
    }, 
  ];

  return (
    <div>
      <h2 className="brand-title"><strong> 다양한 브랜드의 제품들을 발견해보세요</strong></h2>
      <ul className="brand-models-list">
        {popularModelsData.map((model, index) => (
          <li key={index} className="brand-item">
            <div className="brand-card">
              <a href={model.link}>
                <div className="brand-image-container">
                  <img
                    src={model.imageUrl}
                    alt={model.brand}
                    className="brand-image"
                  />
                </div>
                <div className="brand-details">
                  <p className="brand-name"><strong>{model.brand}</strong></p>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandModel;