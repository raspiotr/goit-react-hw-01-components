import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  return (
    <li className={css.item}>
      <span className={css.status}></span>
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
