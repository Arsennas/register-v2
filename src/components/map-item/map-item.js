import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/action';

const MapItem = (props) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const{firstName,surName,lastName, id} = props

  const handleCkick = () => {
    navigate(`/list/${firstName}`)
    dispatch(addItem(id))
  }

  return (
    <ListItem>
      <ListItemButton onClick={handleCkick}>
      <ListItemText>{firstName} {surName} {lastName}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default MapItem;