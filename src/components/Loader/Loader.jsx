import React from 'react';
import { Bars } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = ({ color = '#303f9f' }) => {
  return (
    <div className={s.loader}>
      <Bars
        height="80"
        width="80"
        color={color}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
