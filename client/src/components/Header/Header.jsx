import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './Header.module.scss';
import Logo from '../UI/Logo/Logo';
import Link from '../UI/Link/Link';
import { ROUTES } from '../../utils/routes';
import Switch from '../UI/Switch/Switch';

const Header = () => {
  const Links = [
    { name: 'Blog', link: ROUTES.BlOG },
    { name: 'Projects', link: ROUTES.PROJECTS },
    { name: 'About', link: ROUTES.ABOUT },
    { name: 'Portfolio', link: ROUTES.PORTFOLIO },
  ];
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.logo}>
              <Logo logo="S.Erbol1297" />
            </div>
            <div className={style.right_wrapper}>
              <Link links={Links} />
              <Switch />
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
