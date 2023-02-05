import React,{useEffect} from 'react';
import Header from '../components/header/header';
import { Routes,Route } from 'react-router-dom';
import CreateList from './createList/createList';
import List from './list/list';
import { useSelector } from 'react-redux';
import DetailItem from '../components/detail-item/detail-item';

const Main = () => {

  const {list} = useSelector(state=> state.listReducer)

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<CreateList/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/list/:slug' element={<DetailItem/>}/>
      </Routes>
    </div>
  );
};

export default Main;