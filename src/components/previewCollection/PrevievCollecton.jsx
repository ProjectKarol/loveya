import React from 'react';
import './PrevievCollecton.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PrevievCollecton = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'> {title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((items, idx) => idx < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default PrevievCollecton;
