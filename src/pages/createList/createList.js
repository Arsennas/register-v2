import React from 'react';
import MyForm from '../../components/myForm/my-form';
import s from './createList.module.css'

const CreateList = () => {
  return (
    <div className={s.createList}>
      <div className={s.container}>
        <div className={s.content}>
          <br />
          <br />
          <br />
          <MyForm/>
        </div>
      </div>
    </div>
  );
};

export default CreateList;