import React from 'react';
import style from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';

const Logo = (props) => {
  return (
    <div className={style.logo}>
      <NavLink to={ROUTES.HOME} className={style.wrapper}>
        {props.logo}
      </NavLink>
    </div>
  );
};

export default Logo;
