import styles from "./eventSummary.module.css";

type EventSummaryProps = {
  title: string;
};

function EventSummary({ title }: EventSummaryProps) {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
