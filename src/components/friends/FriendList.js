import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendsListItem.module.css'
import PropTypes from 'prop-types';



const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );

  FriendListItem.propTypes = {
    friends: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };

export default FriendList;