import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Link.module.scss';

const Link = ({ links }) => {
  return (
    <ul className={style.link_list}>
      {links.map((link, i) => (
        <li key={i} className={style.link_item}>
          <NavLink to={link.link} className={style.link}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Link;
