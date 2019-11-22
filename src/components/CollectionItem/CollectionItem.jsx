import React from 'react';
import './CollectionItem.scss';
import CustomButon from '../CustomButon/CustomButon';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButon onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButon>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
