import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';



const Profile = ({user: {name, stats: {followers, views, likes}, location, tag, avatar}}) => {
    return (
        <>
     <div className={css.profile}>
  <div className="description">
    <img alt='avatar' src={avatar}  />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers: </span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views: </span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>Likes: </span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>

        </>
        
    );
}

export default Profile;


Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  })

};


 

