import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import PrevievCollecton from '../../components/previewCollection/PrevievCollecton';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => {
          return <PrevievCollecton key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
