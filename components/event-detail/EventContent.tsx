import styles from "./eventContent.module.css";

type EventContentProps = {
  children: React.ReactNode;
};

function EventContent({ children }: EventContentProps) {
  return <section className={styles.content}>{children}</section>;
}

export default EventContent;
