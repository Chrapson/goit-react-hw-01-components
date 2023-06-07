import styles from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.header}>Type</th>
          <th className={styles.header}>Amount</th>
          <th className={styles.header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.row} key={id}>
            <td className={styles.column}>{type}</td>
            <td className={styles.column}>{amount}</td>
            <td className={styles.column}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
