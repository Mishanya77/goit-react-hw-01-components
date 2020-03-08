import React from 'react'
import SingleStat from './SinglStat'
import css from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistic = props => {
    return (
 <section className={css.statistics}>
   <h2 className={css.title}>{props.title}</h2>
   <ul className={css.statList}>
        {props.stats.map(item => 
        <SingleStat 
        key={item.id}  
        props={item}
        />
        )}
   </ul>
</section>
    );
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };

export default Statistic;


