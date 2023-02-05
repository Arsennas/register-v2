import React from 'react';

const Map = ({items,renderItem}) => {
  return (
    <>{items.map(renderItem)}</>
  );
};

export default Map;