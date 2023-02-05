import React,{useState} from 'react';
import s from './detail.module.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailItem = (props) => {

  const params = useParams()

  const { item } = useSelector(state => state.listReducer)
  console.log(item)

  return (
    <center>
      <div className={s.main}>
        <div className={s.cart}>
          <h1>Пользователь:{params.slug}</h1>
        </div>
      </div>
    </center>
  );
};

export default DetailItem;