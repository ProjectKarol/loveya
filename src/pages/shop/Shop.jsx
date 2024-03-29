import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection';

import CollectionsOvervie from '../../components/collectionsOvervie/CollectionsOvervie';

const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOvervie} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
