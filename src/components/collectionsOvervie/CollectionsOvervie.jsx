import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collectionsOvervie.scss';
import PrevievCollecton from '../previewCollection/PrevievCollecton';
import { selectCollectionForPreview } from '../../redux/shop/shopSelectors';

const CollectionsOvervie = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PrevievCollecton key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOvervie);
