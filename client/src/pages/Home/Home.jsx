import React from 'react';
import style from './Home.module.scss';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div className={`${style.home_wrapper} content`}>
      <div className="container">
        <div className={style.wrapper}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Home;
