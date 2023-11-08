import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = props => {
  return (
    <li className={css.item}>
      <span className={props.isOnline ? css.statusOn : css.statusOff}></span>
      <img
        className={css.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
