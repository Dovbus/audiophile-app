import React from 'react';
import '../../scss/App.scss';
import './Product.scss';

function ProductFeatures({ product }) {
  const { features, includes } = product;
  return (
    <div className="product-features">
      <div className="product-features__features">
        <h3 className="product-features__title">FEATURES</h3>
        <p>{features}</p>
      </div>
      <div className="product-features__box">
        <h3 className="product-features__title">in the box</h3>
        <div className="product-features-list">
          {includes
            && includes.map((item, index) => (
              <div key={index} className="product-feature">
                <p className="subtitle subtitle--orange product-feature__number">
                  {item.quantity}
                  x
                </p>
                <p>{item.item}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures;
