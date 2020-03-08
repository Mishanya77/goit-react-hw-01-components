import React from 'react';
import css from './Statistics.module.css'

const SinglStat = (item) => {
    return (
       <li className={css.item}>
      <span className={css.label}>{item.props.label}    </span>
      <span className={css.percentage}>  {item.props.percentage}%</span>
    </li> 
    );
}

export default SinglStat;

