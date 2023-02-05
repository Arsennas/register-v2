import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header'>
      <div className='container'>
        <div className='content'>
          <div className='list-item'>
            <Button
              style={{
                backgroundColor: '#81ecec'
              }}
              variant="contained"
              disableElevation
              onClick={() => navigate('/')}>
              register
            </Button>
          </div>
          <div className='list-item'>
            <Button
              style={{
                backgroundColor: '#81ecec'
              }}
              variant="contained"
              disableElevation
              onClick={() => navigate('/list')}>
              список
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;