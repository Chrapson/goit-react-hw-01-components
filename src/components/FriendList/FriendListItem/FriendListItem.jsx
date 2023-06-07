import styles from '../FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? styles.statusOnline : styles.statusOffline;
  return (
    <li className={styles.listItem}>
      <span className={`${styles.status} ${statusClassName}`}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
