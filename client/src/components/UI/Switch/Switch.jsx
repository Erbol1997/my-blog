import React from 'react';
import style from './Switch.module.scss';

import day from '../../../assets/icons/sun.png';
// import night from '../../../assets/icons/moon.png';

const Switch = () => {
  return (
    <div className={style.switch}>
      <div className={style.wrapper}>
        <div className={style.day}>
          <img src={day} alt="day" />
        </div>
        <div className={style.circle}></div>
        {/* <div className={style.night}>
          <img src={night} alt="night" />
        </div> */}
      </div>
    </div>
  );
};

export default Switch;
