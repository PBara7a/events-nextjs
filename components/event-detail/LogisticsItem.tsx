import styles from "./logisticsItem.module.css";

type LogisticsItemProps = {
  children: React.ReactNode;
  icon: JSX.Element;
};

function LogisticsItem({ children, icon }: LogisticsItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
