import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          const randomColor =
            '#' + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: randomColor }}
            >
              <span className={styles.label}>{label} </span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
