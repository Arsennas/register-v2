import React from 'react';
import { useSelector } from 'react-redux';
import s from './list.module.css'
import Map from '../../components/map/map';
import { List } from '@mui/material';
import MapItem from '../../components/map-item/map-item';

const Lists = () => {

  const { list } = useSelector(state => state.listReducer)

  return (
      <List sx={{width: '350px'}}>
        <Map
          items={list}
          renderItem={(item) => <MapItem
            {...item}
            key={item.id} />} />
      </List>
  );
};

export default Lists;